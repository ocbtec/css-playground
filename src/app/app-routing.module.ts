import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundPageComponent } from './playground-page/playground-page.component';
import { UsedTechnologiesPageComponent } from './used-technologies-page/used-technologies-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PlaygroundPageComponent },
  { path: 'used-technologies', component: UsedTechnologiesPageComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
