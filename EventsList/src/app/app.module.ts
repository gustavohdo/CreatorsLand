import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsBannerComponent } from './events-banner/events-banner.component';
import { HomeComponent } from './home/home.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ComunityPageComponent } from './comunity-page/comunity-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsBannerComponent,
    HomeComponent,
    EventsPageComponent,
    ComunityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
