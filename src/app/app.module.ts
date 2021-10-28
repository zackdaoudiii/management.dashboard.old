import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
