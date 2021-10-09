import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterClassesComponent} from './modules/master-classes/master-classes.component';
import {AboutUsComponent} from './modules/about-us/about-us.component';
import {SalesComponent} from './modules/sales/sales.component';
import {CorporateCoursesComponent} from './modules/corporate-courses/corporate-courses.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "about-us",
  },
  {
    path: "master-classes",
    component: MasterClassesComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "corporate-courses",
    component: CorporateCoursesComponent
  },
  {
    path: "sales",
    component: SalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
