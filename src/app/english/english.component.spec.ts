import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishComponent } from './english.component';

describe('EnghlisComponent', () => {
  let component: EnglishComponent;
  let fixture: ComponentFixture<EnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
