import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SetComponent } from './set/set.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SetCameraComponent } from './setCamera/setCamera.component';
import { FrequentComponent } from './frequent/frequent.component';
import { SettingsComponent } from './settings/settings.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { ShopComponent } from './setCamera/shop/shop.component';
import { CamerasComponent } from './setCamera/cameras/cameras.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetComponent,
    PagenotfoundComponent,
    SetCameraComponent,
    FrequentComponent,
    SettingsComponent,
    UserDetailComponent,
    CameraDetailComponent,
    ShopComponent,
    CamerasComponent,
    ShopDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
