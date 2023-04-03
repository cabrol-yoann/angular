import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cd } from 'src/model/cd';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CdsService {
    constructor(private http : HttpClient) { }
    getAllCDs(): Observable<Cd[]> {
        return this.http.get<Cd[]>('http://localhost:3000/CD');
    }

    getCdById(id: number): Observable<Cd> {
        const cd = this.http.get<Cd>('http://localhost:3000/CD/' + id);
        //ou const cd = this.listCds.find(function(cd) {return cd.id === id;})
        if (cd === undefined) {
            throw new Error('CD not found');
        }
        else {
            return cd;
        }
    }

    addCd(cd: Cd): Observable<Cd> {
        return this.getAllCDs().pipe(
            map(cds=> [...cds].sort((a,b) => a.id - b.id)),
            map(cds_tries => cds_tries[cds_tries.length - 1]),
            map(cd_max => (cd.id = cd_max.id + 1)),
            switchMap(() => this.http.post<Cd>('http://localhost:3000/CD', cd))
        );
    }
}