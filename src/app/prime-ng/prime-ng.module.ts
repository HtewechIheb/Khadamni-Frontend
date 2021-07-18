import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MenubarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MenubarModule
  ]
})
export class PrimeNGModule { }
