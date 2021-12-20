import { RouterModule, Routes } from '@angular/router';
import { DeclaracionComponent } from './components/declaracion/declaracion.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [

    { path: 'inicio', component: HomeComponent },
    { path: 'declaracion', component: DeclaracionComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }

];


export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);