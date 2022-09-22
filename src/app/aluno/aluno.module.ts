import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroAlunoComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AlunoModule { }
