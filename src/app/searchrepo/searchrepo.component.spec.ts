import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrepoComponent } from './searchrepo.component';

describe('SearchrepoComponent', () => {
  let component: SearchrepoComponent;
  let fixture: ComponentFixture<SearchrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
