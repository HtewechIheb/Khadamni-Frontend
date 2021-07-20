import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule
  ]
})
export class PrimeNGModule { }
