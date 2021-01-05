import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundInputComponent } from './playground-input/playground-input.component';
import { PlaygroundOutputComponent } from './playground-output/playground-output.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundInputComponent,
    PlaygroundOutputComponent,
    TopContainerComponent,
    FooterComponent,
    SettingsTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
