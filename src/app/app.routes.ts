import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewComponent } from '../app/overview/overview.component';
import { RepositoryComponent } from '../app/repository/repository.component';
import { StartComponent } from '../app/start/start.component';
import { FollowerComponent } from '../app/follower/follower.component';
import { FollowingComponent } from '../app/following/following.component';

export const routes: Routes=[
    {
        path : '',
        redirectTo : 'Overview',
        pathMatch: 'full'
    },

    {
        path : 'Overview',
        component: OverviewComponent
    },

    {   path: 'Repository',
        component:RepositoryComponent
    },
    {
        path : 'Start',
        component: StartComponent
    },

    {   path: 'Follower',
        component:FollowerComponent
    },
     {   path: 'Following',
        component:FollowingComponent
    },
    ];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);