import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeCdComponent } from './liste-de-cd.component';

describe('ListeDeCdComponent', () => {
  let component: ListeDeCdComponent;
  let fixture: ComponentFixture<ListeDeCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeCdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
