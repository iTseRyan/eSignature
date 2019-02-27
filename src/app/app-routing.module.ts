import { NgModule } from '@angular/core';
import { SignatureFormComponent } from "./signature-form/signature-form.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: SignatureFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
