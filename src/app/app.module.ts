import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TeamComponent } from './Components/team/team.component';
import { UebersichtComponent } from './Components/uebersicht/uebersicht.component';
import { ProjekteComponent } from './Components/projekte/projekte.component';
import { ThesisComponent } from './Components/thesis/thesis.component';
import { FachartikelComponent } from './Components/fachartikel/fachartikel.component';
import { BuecherComponent } from './Components/buecher/buecher.component';
import { EventsComponent } from './Components/events/events.component';
import { AktuellesComponent } from './Components/aktuelles/aktuelles.component';
import { KontaktComponent } from './Components/kontakt/kontakt.component';
import { LinksComponent } from './Components/links/links.component';
import { LoginComponent } from './Components/login/login.component';
import { UeberunsComponent } from './Components/ueberuns/ueberuns.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: 'Uebersicht', component: UebersichtComponent},
    {path: 'ueberuns', component: UeberunsComponent},
    {path: 'Team', component: TeamComponent},
    {path: 'Projekte', component: ProjekteComponent},
    {path: 'Thesis', component: ThesisComponent},
    {path: 'Fachartikel', component: FachartikelComponent},
    {path: 'Buecher', component: BuecherComponent},
    {path: 'Events', component: EventsComponent},
    {path: 'Aktuelles', component: AktuellesComponent},
    {path: 'Kontakt', component: KontaktComponent},
    {path: 'Login', component: LoginComponent}
  ], {useHash: true}) ],
  declarations: [ AppComponent, TeamComponent, UebersichtComponent, ProjekteComponent, ThesisComponent, FachartikelComponent, BuecherComponent, EventsComponent, AktuellesComponent, KontaktComponent, LinksComponent, LoginComponent, UeberunsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
