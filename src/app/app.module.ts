import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
// import { AuthGuard } from './auth-guard.service';
// import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    // RouterModule.forRoot(appRoutes)
  ],
  // providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard],
  providers: [ServersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
