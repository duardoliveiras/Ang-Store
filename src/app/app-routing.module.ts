import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
  // This line is for redirect to home when access the website
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
