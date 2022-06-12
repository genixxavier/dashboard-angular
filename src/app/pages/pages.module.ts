import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressComponent} from "./progress/progress.component";
import {GraphOneComponent} from "./graph-one/graph-one.component";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
    DashboardComponent,

  ],
  exports: [
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
    DashboardComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
})
export class PagesModule { }
