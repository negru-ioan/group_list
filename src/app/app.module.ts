import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FirstPageComponent } from './components/first-page/first-page.component';

@NgModule({
  declarations: [AppComponent, CardComponent, ServicesComponent, FirstPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

// const routes: Routes = [
//   { path: 'first-component', component:  },
//   { path: 'second-component', component: SecondComponent },
// ];
export class AppModule {}
