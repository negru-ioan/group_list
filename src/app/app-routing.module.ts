import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'modifica', component: SecondPageComponent },
  { path: 'nuovo', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
