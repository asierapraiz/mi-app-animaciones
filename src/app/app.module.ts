import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { NameFormComponent } from './name-form/name-form.component';
import { AvatarFormComponent } from './avatar-form/avatar-form.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NameFormComponent,
    AvatarFormComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
