import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {TestComponent} from "./test/test/test.component";
import {LoginComponent} from "./Pages/Auth/login/login.component";
import {LayoutComponent} from "./Layout/layout/layout.component";



const routes: Routes = [

  { path: '', component: LoginComponent  },
  { path: 'test', component: LayoutComponent  }




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
