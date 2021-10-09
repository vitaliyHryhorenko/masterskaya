import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './modules/header/header.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { MasterClassesComponent } from './modules/master-classes/master-classes.component';
import { CorporateCoursesComponent } from './modules/corporate-courses/corporate-courses.component';
import { SalesComponent } from './modules/sales/sales.component';
import { MainTitleComponent } from './modules/main-title/main-title.component';
import { CardItemComponent } from './modules/card-item/card-item.component';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    MasterClassesComponent,
    CorporateCoursesComponent,
    SalesComponent,
    MainTitleComponent,
    CardItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
