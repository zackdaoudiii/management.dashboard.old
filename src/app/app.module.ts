import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HomeTestComponent } from './Pages/home-test/home-test.component';
import { WrongRouteComponent } from './Pages/wrong-route/wrong-route.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    HomeTestComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
