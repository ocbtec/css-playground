import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

import { SettingsService } from './service/settings.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundInputComponent } from './playground-input/playground-input.component';
import { PlaygroundOutputComponent } from './playground-output/playground-output.component';
import { TopContainerComponent } from './top-container/top-container.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { TransformTabComponent } from './transform-tab/transform-tab.component';
import { SliderComponent } from './slider/slider.component';
import { ResetButtonsComponent } from './reset-buttons/reset-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaygroundInputComponent,
    PlaygroundOutputComponent,
    TopContainerComponent,
    FooterComponent,
    SettingsTabComponent,
    TransformTabComponent,
    SliderComponent,
    ResetButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
