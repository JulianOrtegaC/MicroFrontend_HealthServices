import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResquestPendingComponent } from './modal-resquest-pending.component';

describe('ModalResquestPendingComponent', () => {
  let component: ModalResquestPendingComponent;
  let fixture: ComponentFixture<ModalResquestPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalResquestPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalResquestPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
