import { Routes } from '@angular/router';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
// import { ForbiddenComponent } from './module/forbi dden/forbidden.component';
import { ReportComponent } from './module/report/report.component';
import { FilesComponent } from './module/files/files.component';
import { CreteReportComponent } from './components/crete-report/crete-report.component';
import { permissionGuard } from './guards/permission.guard';
import { DeleteReportsComponent } from './components/delete-reports/delete-reports.component';
import { UpdateReportComponent } from './components/update-report/update-report.component';
export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: SidebarComponentComponent },
    {
        path: 'reports', component: ReportComponent,
        children: [
            {
                path: 'new',
                component: CreteReportComponent,
                canActivate: [permissionGuard],
                data: { module: 'Reports', requiredAction: 'Reports.Create' }
            },
            {
                path: 'update',
                component: UpdateReportComponent,
                canActivate: [permissionGuard],
                data: { module: 'Reports', requiredAction: 'Reports.Update' }
            },
            {
                path: 'delete',
                component: DeleteReportsComponent,
                canActivate: [permissionGuard],
                data: { module: 'Reports', requiredAction: 'Reports.Delete' }
            },
        ],
    },
    { path: 'files', component: FilesComponent },
    { path: '**', loadComponent: () => import('./module/forbidden/forbidden.component').then(m => m.ForbiddenComponent) }
];

