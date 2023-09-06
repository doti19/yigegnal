import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbAnalysistRoutingModule } from './db-analysist-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DbAnalysistRoutingModule
  ]
})
export class DbAnalysistModule { }
