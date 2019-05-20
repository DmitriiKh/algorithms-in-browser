import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortArrayMainComponent } from './sort-array-main.component';

describe('SortArrayMainComponent', () => {
  let component: SortArrayMainComponent;
  let fixture: ComponentFixture<SortArrayMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortArrayMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortArrayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
