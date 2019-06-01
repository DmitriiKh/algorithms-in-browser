import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesMainComponent } from './trees-main.component';

describe('TreesMainComponent', () => {
  let component: TreesMainComponent;
  let fixture: ComponentFixture<TreesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
