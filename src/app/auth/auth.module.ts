import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoveryComponent } from './recovery/recovery.component';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { RecoveryModule } from './recovery/recovery.module';

import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    LoginModule,
    RegistrationModule,
    RecoveryModule,

    MaterialModule,
  ],
})
export class AuthModule { }
