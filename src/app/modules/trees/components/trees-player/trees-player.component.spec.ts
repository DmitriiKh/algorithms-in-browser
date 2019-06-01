import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesPlayerComponent } from './trees-player.component';

describe('TreesPlayerComponent', () => {
  let component: TreesPlayerComponent;
  let fixture: ComponentFixture<TreesPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
