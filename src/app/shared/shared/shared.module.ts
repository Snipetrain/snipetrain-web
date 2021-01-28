import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NbThemeModule, NbListModule, NbMenuModule, NbSpinnerModule, NbToastrModule, NbUserModule, NbInputModule, NbContextMenuModule, NbCardModule, NbButtonModule, NbLayoutModule } from '@nebular/theme';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayscrollbarsModule,
    NbThemeModule.forRoot({ name: 'custom-dark' }),
    NbListModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbUserModule,
    NbInputModule,
    NbContextMenuModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    ClipboardModule
  ],
  exports: [
    SpinnerComponent,
    NbThemeModule,
    NbListModule,
    NbMenuModule,
    NbToastrModule,
    NbInputModule,
    NbContextMenuModule,
    NbCardModule,
    NbButtonModule,
    NbLayoutModule,
    ClipboardModule,
    FormsModule,
    NbUserModule,
    OverlayscrollbarsModule,
  ]
})
export class SharedModule { }
