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
    this.funcionarioService.GetEmployees().subscribe({
      next: data => this.employees = data,
      complete: () => console.log(this.employees)
    });
  }

}
