import { BrowserModule } from '@angular/platform-browser';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* http client module */
import { HttpClientModule } from '@angular/common/http';
/* Angular Material */
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
/* charts Module */
import { ChartsModule } from 'ng2-charts';
/*pagination module*/
import { NgxPaginationModule } from 'ngx-pagination';
/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ShortUrlListComponent } from './short-url-list/short-url-list.component';
import { HeaderComponent } from './compoments/header/header.component';
import { FooterComponent } from './compoments/footer/footer.component';
import { UrlshortnerComponent } from './urlshortner/urlshortner.component';
import { AllusersComponent } from './allusers/allusers.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ProfileAdminComponent,
    ProfileUserComponent,
    ShortUrlListComponent,
    HeaderComponent,
    FooterComponent,
    UrlshortnerComponent,
    AllusersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxPaginationModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
