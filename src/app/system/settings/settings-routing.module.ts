import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsBillingComponent } from './settings-billing/settings-billing.component';


const routes: Routes = [
  {      
    path: '',
    component: SettingsComponent,
    children: [
      {      
        path: 'account',
        component: SettingsAccountComponent,
      },
      {
        path: 'billing',
        component: SettingsBillingComponent ,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
