import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCorrelationIdComponent } from './ngx-correlation-id.component';

describe('NgxCorrelationIdComponent', () => {
  let component: NgxCorrelationIdComponent;
  let fixture: ComponentFixture<NgxCorrelationIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCorrelationIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCorrelationIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
