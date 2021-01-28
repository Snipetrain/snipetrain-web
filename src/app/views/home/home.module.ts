import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { homeFeatureKey, reducer } from './store/reducer/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/effect/home.effects';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(homeFeatureKey, reducer),
    EffectsModule.forFeature([HomeEffects]),
  ]
})
export class HomeModule { }
