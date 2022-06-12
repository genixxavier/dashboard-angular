import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoPageFoundComponent} from "./pages/no-page-found/no-page-found.component";
import {PagesRoutingModule} from "./pages/app-routing.module";
import {AuthRoutingModule} from "./auth/auth-routing.module";

const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
