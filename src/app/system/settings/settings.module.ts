import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsBillingComponent } from './settings-billing/settings-billing.component';



@NgModule({
  declarations: [
    SettingsComponent,
    SettingsAccountComponent,
    SettingsBillingComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,


    MaterialModule,
  ]
})
export class SettingsModule { }
