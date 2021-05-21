import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSideNavComponent } from './projects-side-nav.component';

describe('ProjectsSideNavComponent', () => {
  let component: ProjectsSideNavComponent;
  let fixture: ComponentFixture<ProjectsSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
