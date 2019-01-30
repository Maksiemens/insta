import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { ProfileInterfaceComponent } from './profile-interface/profile-interface.component';
import { ProfileMessengersComponent } from './profile-messengers/profile-messengers.component';
import { ProfileLinksComponent } from './profile-links/profile-links.component';
import { ProfileDesignComponent } from './profile-design/profile-design.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { ProfileAnalyticsComponent } from './profile-analytics/profile-analytics.component';
import { ProfileSidebarComponent } from 'src/app/shared/profile-sidebar/profile-sidebar.component';
import { CardComponent } from 'src/app/shared/card/card.component';
import { WithoutProComponent } from 'src/app/shared/without-pro/without-pro.component';
import { MessengerComponent } from 'src/app/shared/messenger/messenger.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInterfaceComponent,
    ProfileMessengersComponent,
    ProfileLinksComponent,
    ProfileDesignComponent,
    ProfileWidgetComponent,
    ProfileAnalyticsComponent,
    ProfileSidebarComponent,
    CardComponent,
    WithoutProComponent,
    MessengerComponent,

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
  ],
  providers:[]
})
export class ProfileModule { }
