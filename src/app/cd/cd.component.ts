import { Component, Input, OnInit } from '@angular/core';
import { Cd } from '../../model/cd';
import { CdsService } from '../service/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
  
})

export class CdComponent implements OnInit {
  @Input() Cd!: Cd;

  uncd!: Cd;
  idcd!: string;
  constructor(private cdservice: CdsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params["id"];
    if (id !== undefined) {
      this.cdservice.getCdById(+id).subscribe(cd => this.uncd = cd);
    }
    else {
      this.uncd = this.Cd;
    }
  }

  addCd() {
    this.uncd.quantity++;
  }
}
