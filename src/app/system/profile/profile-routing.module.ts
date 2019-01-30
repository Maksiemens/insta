import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileInterfaceComponent } from './profile-interface/profile-interface.component';
import { ProfileMessengersComponent } from './profile-messengers/profile-messengers.component';
import { ProfileLinksComponent } from './profile-links/profile-links.component';
import { ProfileDesignComponent } from './profile-design/profile-design.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { ProfileAnalyticsComponent } from './profile-analytics/profile-analytics.component';


const routes: Routes = [
  {      
    path: '',
    component: ProfileComponent,
    children: [
      {      
        path: 'interface',
        component: ProfileInterfaceComponent,
      },
      {      
        path: 'messengers',
        component: ProfileMessengersComponent,
      },
      {      
        path: 'links',
        component: ProfileLinksComponent,
      },
      {      
        path: 'design',
        component: ProfileDesignComponent,
      },
      {      
        path: 'widget',
        component: ProfileWidgetComponent,
      },
      {      
        path: 'analytics',
        component: ProfileAnalyticsComponent,
      },
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
