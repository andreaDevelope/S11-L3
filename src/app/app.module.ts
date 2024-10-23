import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './main-components/nav/nav.component';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { LogInModule } from './pages/log-in/log-in.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SignUpModule,
    LogInModule,
    LogInModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
