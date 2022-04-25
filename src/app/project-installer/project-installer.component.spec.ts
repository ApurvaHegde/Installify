import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInstallerComponent } from './project-installer.component';

describe('ProjectInstallerComponent', () => {
  let component: ProjectInstallerComponent;
  let fixture: ComponentFixture<ProjectInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInstallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
