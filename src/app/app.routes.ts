import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
    {path: '**', component: NotfoundComponent}
];
