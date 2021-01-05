import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareaRoutingModule } from './tarea-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [SumaComponent, RestaComponent, MensajeComponent, TareaComponent],
  imports: [
    CommonModule,
    TareaRoutingModule,
    BrowserAnimationsModule
  ]
})
export class TareaModule { }
