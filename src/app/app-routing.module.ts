import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {TestComponent} from "./test/test/test.component";
import {LoginComponent} from "./Pages/Auth/login/login.component";
import {LayoutComponent} from "./Layout/layout/layout.component";
import {DashboardComponent} from "./Pages/dashboard/dashboard.component";
import {HomeTestComponent} from "./Pages/home-test/home-test.component";



const routes: Routes = [

  { path: '', component: LoginComponent  },
  // { path: 'dashboard', component: LayoutComponent  },
  { path: 'test', component: HomeTestComponent},

  {
    path: '', component : LayoutComponent ,
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'invoice', component: HomeTestComponent },

      ]
  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
