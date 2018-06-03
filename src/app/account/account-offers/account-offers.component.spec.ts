import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOffersComponent } from './account-offers.component';

describe('AccountOffersComponent', () => {
  let component: AccountOffersComponent;
  let fixture: ComponentFixture<AccountOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
