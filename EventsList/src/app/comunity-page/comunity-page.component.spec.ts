import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunityPageComponent } from './comunity-page.component';

describe('ComunityPageComponent', () => {
  let component: ComunityPageComponent;
  let fixture: ComponentFixture<ComunityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
