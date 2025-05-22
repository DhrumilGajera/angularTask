import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }
  // getModules(): Observable<string[]> {
  //   return this.http.get<string[]>('/Access/AccessibleModules').pipe(
  //     tap(res => console.log('Raw API Response:', res)), // 🔍 Debugging data
  //     map(res => res || []),
  //     catchError(err => {
  //       console.error('Error:', err);
  //       return of([]);
  //     })
  //   );
  // }

  private accessibleModules = ['Reports', 'Files', 'Users', 'Project', 'Settings'];
  private accessibleComponents: any = [
    { moduleName: 'Reports', allowedActions: ['Reports.Create', 'Reports.Update'] },
    // { moduleName: 'Files', allowedActions: ['Files.GetFiles', 'Files.UploadFile'] }
  ];
  private reportsCache$ = new BehaviorSubject<any[]>([]);
  getAccessibleModules() {
    return of(this.accessibleModules); // Simulate API response
  }

  hasElementPermission(moduleName: any, elementName: string) {
    const modulePermissions = this.accessibleComponents.find((comp: any) => comp.moduleName === moduleName);
    if (modulePermissions) {
      return modulePermissions.allowedActions.includes(elementName);
    } else {
      return false;
    }
  }

  getReports() {
    return this.reportsCache$.asObservable();
  }

  addReport(report: any) {
    const currentReports = this.reportsCache$.value;
    this.reportsCache$.next([...currentReports, report]);
  }


}
