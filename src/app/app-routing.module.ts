import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './employer/components/home/home.component';
import { HomeEmployeeComponent } from './employee/components/home-employee/home-employee.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio-empleador', component: HomeComponent},
  {path: 'inicio-empleado', component: HomeEmployeeComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
