import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurappComponent } from './restaurapp/restaurapp.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurapp', pathMatch: 'full' },
  { path: 'restaurapp', component: RestaurappComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
