import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResultComponent } from './single-result.component';

describe('SingleResultComponent', () => {
  let component: SingleResultComponent;
  let fixture: ComponentFixture<SingleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
