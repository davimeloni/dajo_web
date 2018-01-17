import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageitensComponent } from './manageitens.component';

describe('ManageitensComponent', () => {
  let component: ManageitensComponent;
  let fixture: ComponentFixture<ManageitensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageitensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
