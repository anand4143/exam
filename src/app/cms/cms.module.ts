import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [ PageNotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    CarouselModule
  ]
})
export class CmsModule { }
