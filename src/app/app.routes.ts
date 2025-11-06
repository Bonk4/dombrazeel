import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Principles } from './principles/principles';
import { Projects } from './projects/projects';

export const routes: Routes = [
  {
    path: '',
    title: 'Dominic Brazeel | Home',
    component: Home,
  },
  {
    path: 'projects',
    title: "Dominic Brazeel | Projects (that I'll let you see)",
    component: Projects,
  },
  {
    path: 'principles',
    title: 'Dominic Brazeel | Coding Principles',
    component: Principles,
  },
];
