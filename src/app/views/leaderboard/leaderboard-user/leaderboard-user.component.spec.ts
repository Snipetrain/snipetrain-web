import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardUserComponent } from './leaderboard-user.component';

describe('LeaderboardUserComponent', () => {
  let component: LeaderboardUserComponent;
  let fixture: ComponentFixture<LeaderboardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});