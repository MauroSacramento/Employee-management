import { Component } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Observable } from 'rxjs';
import { Funcionario } from '../../models/Funcionario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  employees: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService){
    this.funcionarioService.GetEmployees().subscribe(data => {
      const dados = data;

      dados.map((item) => {
        item.dataDeAlteracao = new Date().toLocaleDateString('pt-BR');
      })

      this.employees = dados;
      console.log(this.employees)
    });
  }

}
