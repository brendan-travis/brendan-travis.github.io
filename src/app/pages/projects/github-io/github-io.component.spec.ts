import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIoComponent } from './github-io.component';

describe('GithubIoComponent', () => {
  let component: GithubIoComponent;
  let fixture: ComponentFixture<GithubIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubIoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
