import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { OtherComponent } from './other/other.component';



const routes: Routes = [
  { path: 'filter-page', component: FilterPageComponent, data: { animation: 'FilterPage' } },
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'OpenClosePage' } },
  { path: 'other', component: OtherComponent, data: { animation: 'OtherPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
