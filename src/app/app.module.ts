import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { LetrasPipe } from './pipes/letras.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PipesComponent, LetrasPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
