import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
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
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MenuModule,
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
    InputNumberModule,
    DropdownModule,
    InputSwitchModule,
    AccordionModule,
    ToastModule,
    TableModule,
    SliderModule
  ],
  exports: [
    BrowserAnimationsModule,
    MenuModule,
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
    InputNumberModule,
    DropdownModule,
    InputSwitchModule,
    AccordionModule,
    ToastModule,
    TableModule,
    SliderModule
  ],
})
export class PrimeNGModule {}
