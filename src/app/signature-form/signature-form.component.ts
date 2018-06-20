import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SignaturePad } from "angular2-signaturepad/signature-pad";

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
  signatureImage: string;
  signCompleted: boolean = false;
  signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 580,
    'canvasHeight': 200
  };

  @ViewChild(SignaturePad) signaturePad: SignaturePad;


  // TODO Implement form control and form groups
  fName = new FormControl('', [
    Validators.required
  ]);

  lName = new FormControl('', [
    Validators.required
  ]);

  signatureField = new FormControl('', [
    Validators.required
  ]);

  contactControl = new FormControl('', [
    Validators.required
  ]);

  informationControl = new FormControl('', [
    Validators.required
  ]);

  permissionControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
  ) {}

  ngOnInit() {
  }

  signatureComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  sign(): void {
    this.signatureComplete();
    this.signCompleted = true;
  }
}
