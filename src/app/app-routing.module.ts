import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

// import { HomeComponent } from './home/home.component'; // Import your components
// import { AboutComponent } from './about/about.component';

// const routes: Routes = []
const routes: Routes = [
  { path: '', component:  FirstPageComponent}, // Default route
  { path: 'modifica', component: SecondPageComponent }, // Example route
  // Add more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



