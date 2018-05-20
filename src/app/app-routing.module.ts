import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
