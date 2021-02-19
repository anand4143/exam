import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestOnlineRoutingModule } from './test-online-routing.module';
import { TestComponent } from './test/test.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestOnlineRoutingModule,
    MatExpansionModule,
    MatRadioModule,
    CountdownModule
  ]
})
export class TestOnlineModule { }
