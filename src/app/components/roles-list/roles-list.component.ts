import { Component } from '@angular/core';
import { RolesListService } from './roles-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles-list',
  imports: [CommonModule],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent {
  isLoading = false;
  error: string | null = null;
  roles$;

  constructor(private rolesListService: RolesListService) {
    this.roles$ = this.rolesListService.roles$;
  }

  async ngOnInit() {
    this.isLoading = true;
    this.roles$.subscribe(() => {
      this.isLoading = false;
    });
  }
}
