import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signature-form',
  templateUrl: './signature-form.component.html',
  styleUrls: ['./signature-form.component.scss']
})
export class SignatureFormComponent implements OnInit {
  value: string;
  confirmContact: boolean = false;
  confirmInformation: boolean = false;
  confirmPermission: boolean = false;


  fName = new FormControl('', [
    Validators.required
  ]);

  lName = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit() {
  }

  login(username: string, password: string): void {
  }
}
