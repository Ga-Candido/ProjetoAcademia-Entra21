import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SegurancaService } from './services/seguranca.service';
import { CadastroComponent } from './cadastroAluno/cadastro.component';
import { TimeComponent } from './time/time.component';




const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[SegurancaService]}, 
  {path:"cadastro",component:CadastroComponent,canActivate:[SegurancaService]}, 
  {path:"time", component:TimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
