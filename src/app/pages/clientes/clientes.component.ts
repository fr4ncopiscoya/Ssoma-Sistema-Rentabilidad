import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  
  constructor(){

  }
  // dtOptions: DataTables.Settings = {};
  dtOptions: Config = {};

  // @ViewChild(DataTableDirective, { static: false });
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: '250px'
    }
  }
  


}
