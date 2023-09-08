import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { NewComponent } from './components/new/new.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { ModiyCardComponent } from './components/modiy-card/modiy-card.component';
import { InitialsComponent } from './components/initials/initials.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ServicesComponent,
    FirstPageComponent,
    SecondPageComponent,
    NewComponent,
    ModiyCardComponent,
    InitialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

// const routes: Routes = [
//   { path: 'first-component', component:  },
//   { path: 'second-component', component: SecondComponent },
// ];
export class AppModule {}
