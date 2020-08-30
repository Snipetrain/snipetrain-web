import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbListModule, NbUserModule, NbInfiniteListDirective } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'custom-dark' }),
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbListModule,
    NbUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
