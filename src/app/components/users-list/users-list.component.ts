import { Component, OnInit } from '@angular/core';
import { UsersListService } from './users-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  isLoading = false;
  error: string | null = null;
  users$;

  constructor(private usersListService: UsersListService) {
    this.users$ = this.usersListService.users$;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.users$.subscribe(() => {
      this.isLoading = false;
    });
  }
}
