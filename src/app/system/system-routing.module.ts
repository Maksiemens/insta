import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SystemComponent } from "./system.component";


const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      {
        path: "profile",
        loadChildren: "./profile/profile.module#ProfileModule"
      },
      {
        path: "settings",
        loadChildren: "./settings/settings.module#SettingsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
