import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome!: string
  idade!: string
  cargo!: string

  funcionarios: Array<any> = [
    {
      nome: "Gabriel",
      idade: "19",
      cargo: "Personal"
    },
    {
      nome: "Jessica",
      idade: "16",
      cargo: "MODELO"

    },
    {
      nome: "Emerson",
      idade: "16",
      cargo: "Developer"

    },
    {
      nome: "Felipe",
      idade: "16",
      cargo: "Developer"

    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  deletar(index: number) {
    this.funcionarios.splice(index, 1)
  }

  adicionar() {
if (this.nome) {
  this.funcionarios.push(
    {
      nome: this.nome,
      idade: this.idade,
      cargo: this.cargo
    }
  )
} else {
 alert("Virus finalizado: Click no 'Ok' para instalar")
}
    
  }
}
