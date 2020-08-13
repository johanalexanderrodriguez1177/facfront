import { RouterModule, Routes } from '@angular/router';
import {SoniatComponent} from './components/soniat/soniat.component';

const routes: Routes = [
  { path: 'soniat', component: SoniatComponent },
  {path : '', component : SoniatComponent}
];

export const routing = RouterModule.forRoot(routes);
