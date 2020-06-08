import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
