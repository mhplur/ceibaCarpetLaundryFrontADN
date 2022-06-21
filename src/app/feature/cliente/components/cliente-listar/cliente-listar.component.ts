import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  public clientes: Observable<Cliente[]>;
  private clienteService: ClienteService;

  constructor(clienteService: ClienteService) { 
    this.clienteService = clienteService;
  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
