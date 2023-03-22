import { Component, Input, OnInit } from '@angular/core';
import { Cd } from '../../model/cd';
import { CdsService } from '../service/cds.service';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
  
})

export class CdComponent implements OnInit {
  @Input() Cd!: Cd;

  uncd!: Cd;
  idcd!: string;
  constructor(private cdService:CdsService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idcd = this.router.snapshot.params["id"];
    if (this.idcd !== undefined) {
      this.uncd = this.cdService.getCdById(+this.idcd);
    }
    else {
      this.uncd = this.Cd;
    }
  }

  addCd() {
    this.Cd.quantity++;
  }
}
