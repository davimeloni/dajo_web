import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageaccountsComponent } from './manageaccounts.component';

describe('ManageaccountsComponent', () => {
  let component: ManageaccountsComponent;
  let fixture: ComponentFixture<ManageaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
