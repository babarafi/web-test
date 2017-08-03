import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverviewComponent } from '../app/overview/overview.component';
import { RepositoryComponent } from '../app/repository/repository.component';
import { StartComponent } from '../app/start/start.component';
import { FollowerComponent } from '../app/follower/follower.component';
import { FollowingComponent } from '../app/following/following.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    RepositoryComponent,
    StartComponent,
    FollowerComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
