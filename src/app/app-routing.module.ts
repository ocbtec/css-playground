import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';

const routes: Routes = [
  { path: '', component: PlaygroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
