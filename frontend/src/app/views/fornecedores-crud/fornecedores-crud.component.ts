import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores-crud',
  templateUrl: './fornecedores-crud.component.html',
  styleUrls: ['./fornecedores-crud.component.css']
})
export class FornecedoresCrudComponent implements OnInit {
  
  

  constructor (private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFornecedoresCreate(): void {

    this.router.navigate(['/fornecedores/create'])

  }

}
