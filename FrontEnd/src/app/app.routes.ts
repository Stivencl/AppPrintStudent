import { Routes} from '@angular/router';
import path from 'path';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },

    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {path: 'singin', 
       loadComponent: () => import('./components/singin/sing-in.component').then(m => m.SingInComponent)
    },

    {path: 'dashboard', 
        loadComponent: () => import('./components/dashboard/dash-board.component').then(m => m.DashBoardComponent),
        children:[{ path: 'requestudiante',
            loadComponent: () => import('./components/requestudiante/requestudiante.component').then(m => m.RequestudianteComponent)},
            {path: 'singin', 
                loadComponent: () => import('./components/singin/sing-in.component').then(m => m.SingInComponent)
             },
        ]
    },
    {path: 'maintenance', 
        loadComponent: () => import('./components/maintenance/maintenance.component').then(m => m.MaintenanceComponent)
    },

    {path: 'errorpage',
        loadComponent: () => import('./components/errorpage/errorpage.component').then(m => m.ErrorpageComponent)
    },

    {path: 'requestudiante',
        loadComponent: () => import('./components/requestudiante/requestudiante.component').then(m => m.RequestudianteComponent)
    },
    
    {path: '**', 
        redirectTo: '/errorpage', 
        pathMatch:'full'},
  
];


export class AppRoutingModule{}