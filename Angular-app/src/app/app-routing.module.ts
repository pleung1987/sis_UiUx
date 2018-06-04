import { HomeComponent } from './home/home.component';
import { SetComponent } from './set/set.component';
import { SetCameraComponent } from './setCamera/setCamera.component';
import { FrequentComponent } from './frequent/frequent.component';
import { SettingsComponent } from './settings/settings.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { PagenotfoundComponent  } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user-detail/:id',
        component: UserDetailComponent
      },
      {
        path: 'camera-detail/:id',
        component: CameraDetailComponent
      }
    ]
  },
  { path: 'setCustomer',
  children: [
      {
        path: '',
        component: SetComponent
      },
      {
        path: 'user-detail/:id',
        component: UserDetailComponent
      }
    ]
  },
  { path: 'setCamera', component: SetCameraComponent },
  { path: 'frequent', component: FrequentComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
