import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers-component/servers.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ServersEffects } from './store/effect/servers.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, serversFeatureKey } from './store/reducer/servers.reducer';


@NgModule({
  declarations: [ServersComponent],
  imports: [
    CommonModule,
    ServersRoutingModule,
    SharedModule,
    StoreModule.forFeature(serversFeatureKey, reducer),
    EffectsModule.forFeature([ServersEffects])
  ]
})
export class ServersModule { }
