import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SignaturePadModule } from "angular2-signaturepad";

import { SignatureFormComponent } from './signature-form/signature-form.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SignatureFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SignaturePadModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
