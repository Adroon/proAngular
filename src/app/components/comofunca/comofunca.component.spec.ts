import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComofuncaComponent } from './comofunca.component';

describe('ComofuncaComponent', () => {
  let component: ComofuncaComponent;
  let fixture: ComponentFixture<ComofuncaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComofuncaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComofuncaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
