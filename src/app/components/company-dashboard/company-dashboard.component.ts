import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlassPlus, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {
  public readonly faPen = faPen;
  public readonly faTrash = faTrash;
  public readonly faPlus = faPlus;
  public readonly faMagnifyingGlassPlus = faMagnifyingGlassPlus;
  public readonly offers = [
    { title: 'Angular / .NET Developer', applications: 10, status: 'open' },
    { title: 'Angular / JEE Developer', applications: 7, status: 'open' },
    { title: 'Product Manager', applications: 3, status: 'open' },
    { title: 'Scrum Master', applications: 15, status: 'closed' },
    { title: 'Cloud Engineer', applications: 12, status: 'closed' },
    { title: 'DevOps Engineer', applications: 10, status: 'open' },
    { title: 'Scrum Master', applications: 15, status: 'closed' },
    { title: 'DevOps Engineer', applications: 10, status: 'open' },
    { title: 'DevOps Engineer', applications: 10, status: 'open' },
    { title: 'Angular / .NET Developer', applications: 10, status: 'open' },
    { title: 'Angular / .NET Developer', applications: 10, status: 'open' },
    { title: 'Angular / .NET Developer', applications: 10, status: 'open' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
