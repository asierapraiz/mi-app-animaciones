import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { OtherComponent } from './other/other.component';
import { LandingComponent } from './landing/landing.component';
import { NameFormComponent } from './name-form/name-form.component';
import { AvatarFormComponent } from './avatar-form/avatar-form.component';
import { GameComponent } from './game/game.component';






const routes: Routes = [
  { path: 'landing', component: LandingComponent, data: { animation: 'LandingPage' } },
  { path: 'name-form', component: NameFormComponent, data: { animation: 'NameFormPage' } },
  { path: 'avatar-form', component: AvatarFormComponent, data: { animation: 'AvatarFormPage' } },
  { path: 'game', component: GameComponent, data: { animation: 'GamePage' } },
  { path: 'other', component: OtherComponent, data: { animation: 'OtherPage' } },

  {
    path: 'tarea', loadChildren: () => import('./tarea/tarea.module').then(m => m.TareaModule),
    data: {
      animation: 'TareaPage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
