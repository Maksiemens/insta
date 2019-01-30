import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsBillingComponent } from './settings-billing/settings-billing.component';
import { SettingsSidebarComponent } from 'src/app/shared/settings-sidebar/settings-sidebar.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsAccountComponent,
    SettingsBillingComponent,
    SettingsSidebarComponent,

  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ]
})
export class SettingsModule { }
