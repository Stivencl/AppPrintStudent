import { Routes} from '@angular/router';


export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {path: 'singin', 
       loadComponent: () => import('./components/singin/sing-in.component').then(m => m.SingInComponent)
    },
    {path: 'dashboard', 
        loadComponent: () => import('./components/dashboard/dash-board.component').then(m => m.DashBoardComponent)
    },
    {path: 'maintenance', 
        loadComponent: () => import('./components/maintenance/maintenance.component').then(m => m.MaintenanceComponent)
    },
    {path: 'errorpage',
        loadComponent: () => import('./components/errorpage/errorpage.component').then(m => m.ErrorpageComponent)
    },
    {path: '**', 
        redirectTo: '/errorpage', 
        pathMatch:'full'},
  
];


export class AppRoutingModule{}