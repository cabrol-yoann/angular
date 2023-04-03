import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Cd } from '../../model/cd';
import { map, tap } from 'rxjs/operators';
import { CdsService } from '../service/cds.service';
import { Router } from '@angular/router';

let thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$'); 

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCdComponent {
  formulaire!: FormGroup;
  currentCd$!: Observable<Cd>;

  constructor(private FormBuilder: FormBuilder,private cdservice: CdsService,private router: Router) { }

  ngOnInit(): void {
    this.formulaire = this.FormBuilder.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      artist: [null, [Validators.required, Validators.minLength(1)]],
      year: [null, [Validators.required, Validators.minLength(1)]],
      genre: [null, [Validators.required, Validators.minLength(1)]],
      price: [null, [Validators.required, Validators.min(1)]],
      cover: [null, [Validators.required, Validators.pattern(thumbRegex)]],
      description: [null, [Validators.required, Validators.minLength(25)]],
      quantity: [null, [Validators.required, Validators.min(1)]]
    },
    {
      updateOn: 'blur'
    }
    );

    this.currentCd$ = this.formulaire.valueChanges.pipe(map(FormValue => (
      {
        id: 0,
        title: FormValue.title,
        artist: FormValue.artist,
        year: FormValue.year,
        genre: FormValue.genre,
        price: FormValue.price,
        cover: FormValue.cover,
        description: FormValue.description,
        onsale: FormValue.onsale,
        quantity: FormValue.quantity
      }
    )));
  }

  addCd() {
    let newCd: Cd = {
      id: 0,
      title: this.formulaire.get('title')?.value,
      artist: this.formulaire.get('artist')?.value,
      year: this.formulaire.get('year')?.value,
      genre: this.formulaire.get('genre')?.value,
      price: this.formulaire.get('price')?.value,
      cover: this.formulaire.get('cover')?.value,
      description: this.formulaire.get('description')?.value,
      quantity: this.formulaire.get('quantity')?.value,
    };

    this.cdservice.addCd(newCd).pipe (
      tap(() => this.router.navigate(['/catalag']))
    ).subscribe();
  }
}
