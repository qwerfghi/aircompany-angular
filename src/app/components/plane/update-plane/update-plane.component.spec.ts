import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdatePlaneComponent} from './update-plane.component';

describe('UpdatePlaneComponent', () => {
  let component: UpdatePlaneComponent;
  let fixture: ComponentFixture<UpdatePlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePlaneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
