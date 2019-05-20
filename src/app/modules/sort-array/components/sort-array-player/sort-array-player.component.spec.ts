import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortArrayPlayerComponent } from './sort-array-player.component';

describe('SortArrayPlayerComponent', () => {
  let component: SortArrayPlayerComponent;
  let fixture: ComponentFixture<SortArrayPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortArrayPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortArrayPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
