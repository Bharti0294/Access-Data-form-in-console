import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'contact',
  component:ContactusComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'about',
  component:AboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
