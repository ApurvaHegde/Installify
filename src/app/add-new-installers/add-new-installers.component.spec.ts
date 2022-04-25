import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInstallersComponent } from './add-new-installers.component';

describe('AddNewInstallersComponent', () => {
  let component: AddNewInstallersComponent;
  let fixture: ComponentFixture<AddNewInstallersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewInstallersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewInstallersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
