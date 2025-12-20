import { Routes } from '@angular/router';
import { Exercise1 } from './pages/exercise-1/exercise-1';
import { Result } from './pages/result/result';

export const routes: Routes = [
  {
    path:'',
    component:Exercise1
  },
  {
    path:'result',
    component:Result
  }
];
