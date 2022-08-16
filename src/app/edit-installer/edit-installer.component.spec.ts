import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstallerComponent } from './edit-installer.component';

describe('EditInstallerComponent', () => {
  let component: EditInstallerComponent;
  let fixture: ComponentFixture<EditInstallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
