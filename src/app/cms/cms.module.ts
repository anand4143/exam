import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [ PageNotFoundComponent],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
