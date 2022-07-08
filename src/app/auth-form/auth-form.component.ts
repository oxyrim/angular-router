import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  constructor(private router: Router) {}
  userForm = new FormGroup({
    date: new FormControl(''),
    zipcode: new FormControl(''),
  });

  ngOnInit() {}

  checkUser() {
    this.router.navigate(['/appointment']);
  }
}
