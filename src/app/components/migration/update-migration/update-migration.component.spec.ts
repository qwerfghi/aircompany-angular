import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateMigrationComponent} from './update-migration.component';

describe('UpdateMigrationComponent', () => {
  let component: UpdateMigrationComponent;
  let fixture: ComponentFixture<UpdateMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMigrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
