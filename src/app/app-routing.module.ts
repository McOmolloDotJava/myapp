import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { MytemplateComponent } from './mytemplate/mytemplate.component';

const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'heroes', component: HeroesComponent },
{ path: 'detail/:id', component: HeroDetailComponent },
{ path: 'register', component: RegisterationComponent },
{ path: 'users', component: UsersComponent },
{ path: 'login', component: LoginComponent },
{ path: 'mytemplate', component: MytemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
