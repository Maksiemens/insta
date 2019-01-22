import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';

import { ProfileComponent } from './profile.component';
import { ProfileInterfaceComponent } from './profile-interface/profile-interface.component';


import { ProfileRoutingModule } from './profile-routing.module';


import { ProfileMessengersComponent } from './profile-messengers/profile-messengers.component';
import { ProfileDesignComponent } from './profile-design/profile-design.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { CardComponent } from 'src/app/shared/card/card.component';




@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInterfaceComponent,
    ProfileMessengersComponent,
    ProfileDesignComponent,

    SidebarComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,

    MaterialModule,
  ],
})
export class ProfileModule { }
