import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    CardModule,
    CarouselModule
  ],
  exports: [
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    CardModule,
    CarouselModule
  ],
})
export class PrimeNGModule {}
