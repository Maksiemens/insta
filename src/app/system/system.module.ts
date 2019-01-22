import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from '../shared/header/header.component';
import { SystemComponent } from './system.component';

import { SystemRoutingModule } from './system-routing.module';


@NgModule({
  declarations: [
    SystemComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,  
  ],
})
export class SystemModule { }
