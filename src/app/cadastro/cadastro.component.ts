import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome!:  string
  idade!: string
  cargo!: string
  plano!: string

  funcionarios: Array<any> = [
    {
      nome: "Gabriel",
      idade: "19",
      cargo: "Personal",
      plano: "2"
    },
    {
      nome: "Jessica",
      idade: "16",
      cargo: "",
      plano: ""

    },
    {
      nome: "Emerson",
      idade: "16",
      cargo: "Developer",
      plano: ""

    },
    {
      nome: "Felipe",
      idade: "16",
      cargo: "Developer",
      plano: ""
    },
    {
      nome: "",
      idade: "",
      cargo: "",
      plano: ""
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
          cargo: this.cargo,
          plano: this.plano
        }
        
      )
    } else {
      alert("error")
    }

  }
}
