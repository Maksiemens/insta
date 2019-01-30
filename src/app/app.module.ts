import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';

import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { ProfileCardService } from './shared/services/profile-card.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    AuthModule,
    SystemModule,

    SharedModule,

    BrowserAnimationsModule,
  ],
  providers: [
    UsersService,
    AuthService,
    ProfileCardService,
 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
