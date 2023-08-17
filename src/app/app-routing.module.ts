import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './home/home.component'; // Import your components
// import { AboutComponent } from './about/about.component';

const routes: Routes = []
// const routes: Routes = [
//   { path: '', component: HomeComponent }, // Default route
//   { path: 'about', component: AboutComponent }, // Example route
//   // Add more routes here
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



