import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './profile.component';
import { ProfileInterfaceComponent } from './profile-interface/profile-interface.component';
import { ProfileDesignComponent } from './profile-design/profile-design.component';


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
        path: 'design',
        component: ProfileDesignComponent,
      },
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
