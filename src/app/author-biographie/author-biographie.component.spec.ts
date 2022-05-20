import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBiographieComponent } from './author-biographie.component';

describe('AuthorBiographieComponent', () => {
  let component: AuthorBiographieComponent;
  let fixture: ComponentFixture<AuthorBiographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorBiographieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
