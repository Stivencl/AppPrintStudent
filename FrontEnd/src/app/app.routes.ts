import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingInComponent } from './components/singin/sing-in.component';
import { DashBoardComponent } from './components/dashboard/dash-board.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'singin', component: SingInComponent},
    {path: 'dashboard', component: DashBoardComponent },
    {path: 'maintenance', component: MaintenanceComponent},
    {path: 'errorpage', component: ErrorpageComponent},
    {path: '**', redirectTo: '/errorpage', pathMatch:'full'},

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule{}