import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreteReportComponent } from '../app/components/crete-report/crete-report.component';


@Injectable({
  providedIn: 'root'
})
export class DynamicRouterServiceService {
  constructor(private router: Router) {}

  // addRoute(moduleName: string, componentPath: string) {
  //   const newRoute = { 
  //     path: moduleName.toLowerCase(), 
  //     loadComponent: () => import(`../${componentPath}`).then(m => m[`${moduleName}Component`]) 
  //   };

  //   this.router.resetConfig([...this.router.config, newRoute]); // ✅ Modify routes dynamically
  // }

}
