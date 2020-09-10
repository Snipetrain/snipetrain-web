import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PlayerRank } from 'src/app/models/PlayerRank';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-ngx';
import { debounce } from 'src/app/utils/debounce';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboardLoading = false;
  filtersLoading = false;

  players: PlayerRank[];
  playerCount = 10;

  scrollbarOptions: OverlayScrollbars.Options = {
    className: 'os-theme-light',
    scrollbars: {
      autoHide: 'leave'
    },
    callbacks: {
      onScroll: () => this.onLeaderboardScroll()
    }
  };

  @ViewChild('scrollel', { read: OverlayScrollbarsComponent })
  scrollEl: OverlayScrollbarsComponent;

  @ViewChild('list')
  listEl: ElementRef;

  debouncedUpdateLeaderboard = debounce(() => {
    console.log('[Leaderboard] Loading more results...');
    this.playerCount += 10;
    this.updateData();
  }, 1000);


  constructor(private api: ApiService, private changeDetector: ChangeDetectorRef) {  }

  public ngOnInit(): void {
    this.updateData();
  }

  public onLeaderboardScroll() {
    const currentY = this.scrollEl.osInstance().scroll().position.y + this.scrollEl.osInstance().scroll().handleLength.y;
    const contentHeight = this.listEl.nativeElement.offsetHeight;
    const treshold = contentHeight * 0.7;

    if (currentY > treshold && contentHeight - currentY < 600) {
      this.debouncedUpdateLeaderboard();
    }
  }

  public getCountryClassName(countryCode: string) {
    return `flag flag-${countryCode}`;
  }

  public getDisplayStats(player: PlayerRank) {

    const minutesPlayed = parseInt(player.time, 10) / 60;
    const kills = parseInt(player.kills, 10);
    const deaths = parseInt(player.deaths, 10);
    const played = parseInt(player.totalconnects, 10);

    return {
      minutesPlayed,
      kills,
      deaths,
      played,

      hoursPlayed: (minutesPlayed / 60).toFixed(2),
      kdr: (kills / deaths).toFixed(2),
      kpm: (kills / minutesPlayed).toFixed(2)
    };
  }

  private updateData() {
    this.leaderboardLoading = true;
    this.changeDetector.detectChanges();
    this.api.getAllRank(this.playerCount)
    .subscribe(val => {
      this.players = val;
      this.leaderboardLoading = false;
      this.changeDetector.detectChanges();
    });
  }
}
