import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerQueryCardComponent } from './server-query-card.component';

describe('ServerQueryCardComponent', () => {
  let component: ServerQueryCardComponent;
  let fixture: ComponentFixture<ServerQueryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerQueryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerQueryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
