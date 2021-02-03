import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ShortUrlListComponent } from './short-url-list/short-url-list.component';
import { UrlshortnerComponent } from './urlshortner/urlshortner.component';
import { AllusersComponent } from './allusers/allusers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: ProfileUserComponent },
  { path: 'admin', component: ProfileAdminComponent },
  { path: 'shorturl', component: ShortUrlListComponent },
  { path: 'urlshortner', component: UrlshortnerComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
