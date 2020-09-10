import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbListModule, NbUserModule, NbInfiniteListDirective, NbSpinnerModule, NbInputModule, NbContextMenuModule, NbMenuModule, NbMenuService, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ServerQueryCardComponent } from './components/server-query-card/server-query-card.component';
import { SafeUrlPipe } from './pipes/SafeUrl.pipe';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeaderboardComponent,
    SpinnerComponent,
    ServerQueryCardComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'custom-dark' }),
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    OverlayscrollbarsModule,
    InfiniteScrollModule,
    NbContextMenuModule,
    FormsModule,
    ClipboardModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbListModule,
    NbMenuModule.forRoot(),
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbUserModule,
    NbInputModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
