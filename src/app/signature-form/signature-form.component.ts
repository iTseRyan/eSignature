import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-signature-form',
  templateUrl: './signature-form.component.html',
  styleUrls: ['./signature-form.component.scss']
})
export class SignatureFormComponent implements OnInit {
  signatureImage: string;
  signCompleted: boolean = false;
  imgData: string;
  confirmed: boolean = false;

  signaturePadOptions: Object = {
    'minWidth': 1,
    'canvasWidth': 580,
    'canvasHeight': 200
  };

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

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

  restart() {
    this.signatureImage = null;
    this.signCompleted = false;
  }

  screenshot() {
    this.handleScreenshot();
  }

  handleScreenshot() {
    html2canvas(document.querySelector("#information-form-container")).then(canvas => {
      this.imgData = canvas.toDataURL();
    });
    this.confirmed = true;
  }
}
