import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesBrowserComponent } from './movies-browser.component';

describe('MoviesBrowserComponent', () => {
  let component: MoviesBrowserComponent;
  let fixture: ComponentFixture<MoviesBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
