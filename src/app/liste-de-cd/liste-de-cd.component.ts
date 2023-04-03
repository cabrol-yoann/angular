import { Component, OnInit } from '@angular/core';
import { Cd } from 'src/model/cd';
import { CdsService } from '../service/cds.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-de-cd',
  templateUrl: './liste-de-cd.component.html',
  styleUrls: ['./liste-de-cd.component.scss']
})
export class ListeDeCdComponent implements OnInit {
  listCd$!: Observable<Cd[]>;

  constructor(private myCdService: CdsService) { }
  
  ngOnInit(): void {
  
    this.listCd$ = this.myCdService.getAllCDs();
      
  }
}
