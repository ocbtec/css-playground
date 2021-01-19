import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ColorSliderModule } from 'ngx-color/slider';
import { ColorChromeModule } from 'ngx-color/chrome';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

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
import { BorderTabComponent } from './border-tab/border-tab.component';
import { BorderStyleSelectComponent } from './border-tab/border-style-select/border-style-select.component';
import { BoxShadowTabComponent } from './box-shadow-tab/box-shadow-tab.component';
import { ColorsTabComponent } from './colors-tab/colors-tab.component';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';
import { UsedTechnologiesPageComponent } from './used-technologies-page/used-technologies-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollIndicatorComponent } from './scroll-indicator/scroll-indicator.component';
import { CssCodeTabComponent } from './css-code-tab/css-code-tab.component';

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
    ResetButtonsComponent,
    BorderTabComponent,
    BorderStyleSelectComponent,
    BoxShadowTabComponent,
    ColorsTabComponent,
    PlaygroundPageComponent,
    UsedTechnologiesPageComponent,
    NotFoundComponent,
    ScrollIndicatorComponent,
    CssCodeTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    ColorSliderModule,
    ColorChromeModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
