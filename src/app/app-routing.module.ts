import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { DEFAULT_ROUTES } from './routes/default-layout-routes';


const routes: Routes = [
  { path: '', component: DefaultLayoutComponent, children: DEFAULT_ROUTES},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
