import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ComunityPageComponent } from './comunity-page/comunity-page.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'eventos', component: EventsPageComponent },
    { path: '', component: EventsPageComponent },
    { path: 'comunidade', component: ComunityPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
