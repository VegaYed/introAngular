import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './persona/persona.component';
import { CheckLoginGuard as AuthGuard} from './guards/check-login.guard';

const routes: Routes = [
  {path: 'lista', component: ListaComponent, canActivate: [AuthGuard]},
  {path: 'persona', component: PersonaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
