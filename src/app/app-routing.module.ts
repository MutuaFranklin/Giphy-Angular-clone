import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component';

const routes: Routes = [
  // { path: '', component: AppComponent},
  // { path: '', redirectTo:"/ma", pathMatch:"full"},
  // { path:'**', component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
