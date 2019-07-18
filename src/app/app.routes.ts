import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalaxyComponent } from './galaxy/galaxy.component';

const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'galaxy', component: GalaxyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot( RUTAS );