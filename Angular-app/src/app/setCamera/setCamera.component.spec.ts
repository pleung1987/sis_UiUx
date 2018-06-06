import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCameraComponent } from './setCamera.component';

describe('SetCameraComponent', () => {
  let component: SetCameraComponent;
  let fixture: ComponentFixture<SetCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
