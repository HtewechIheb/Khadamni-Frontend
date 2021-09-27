import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { StepsModule } from 'primeng/steps';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    StepsModule,
    InputTextareaModule,
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
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    StepsModule,
    InputTextareaModule,
  ],
})
export class PrimeNGModule {}
