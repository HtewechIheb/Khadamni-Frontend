import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    PaginatorModule,
    InputTextModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MenubarModule,
    SharedModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    PaginatorModule,
    InputTextModule,
  ],
})
export class PrimeNGModule {}
