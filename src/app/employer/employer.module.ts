import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

const COMPONENTS = [
  HomeComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule
  ],
  exports: [ ...COMPONENTS ]
})
export class EmployerModule { }
