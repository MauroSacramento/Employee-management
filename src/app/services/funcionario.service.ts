import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../models/Funcionario';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = "assets/funcionario.json";

  constructor(private httpClient: HttpClient) { }

  GetEmployees() {
    return this.httpClient.get<Funcionario[]>(this.apiUrl).pipe(
      map(employee => employee)
    );
  }
}
