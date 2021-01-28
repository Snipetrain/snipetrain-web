import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsArticle } from 'src/app/models/News';
import { loadNews } from '../store/action/home.actions';
import { HomeState } from '../store/reducer/home.reducer';
import { selectNews } from '../store/selector/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scrollbarOptions: OverlayScrollbars.Options = {
    className: 'os-theme-light',
    scrollbars: {
      autoHide: 'leave'
    },
    callbacks: {
      onScroll: () => this.onNewsScroll()
    }
  };

  public newsLoading = false;
  public news$: Observable<NewsArticle[]>;

  constructor(private store: Store<HomeState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadNews());
    this.news$ = this.store.select(selectNews);
    this.news$.subscribe(val => console.log(val));
  }

  private onNewsScroll(): void {

  }

}
