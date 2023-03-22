import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeDeCdComponent } from './liste-de-cd/liste-de-cd.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'listecd', component: ListeDeCdComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }