import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SegurancaService } from './services/seguranca.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatorsComponent } from './creators/creators.component';
import { TimeComponent } from './time/time.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CreatorsComponent,
    TimeComponent,
    CadastroAlunoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
