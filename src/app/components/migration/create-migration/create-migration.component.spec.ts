import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateMigrationComponent} from './create-migration.component';

describe('CreateMigrationComponent', () => {
  let component: CreateMigrationComponent;
  let fixture: ComponentFixture<CreateMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMigrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
