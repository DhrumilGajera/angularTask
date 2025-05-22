import { Component } from '@angular/core';
// import { DynamicRouterServiceService } from '../../../core/dynamic-router-service.service';
import { RouterModule } from '@angular/router'; 
import { Router } from '@angular/router';
import { HasPermissionDirective } from '../../diractive/has-permission.directive';


@Component({
  selector: 'app-report',
  imports: [RouterModule,HasPermissionDirective],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  constructor(private router: Router) {}

  addReportRoute() {
    this.router.navigate(['/reports/new'])
  }

  addFilesRoute() {
      this.router.navigate(['/reports/update'])
  }

  DeleteFile(){
      this.router.navigate(['/reports/delete'])

  }

}
