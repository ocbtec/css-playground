import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaygroundInputComponent } from './playground-input/playground-input.component';
import { PlaygroundOutputComponent } from './playground-output/playground-output.component';
import { MatSliderModule } from '@angular/material/slider';
import { TopContainerComponent } from './top-container/top-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundInputComponent,
    PlaygroundOutputComponent,
    TopContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
