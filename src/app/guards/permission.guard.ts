import { CanActivateFn } from '@angular/router';
import { MasterServiceService } from '../../core/master-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {
  let hasAccess = true
  const masterServiceService: any = inject(MasterServiceService);
  const module = route.data['module'];
  const action = route.data['requiredAction'];
  hasAccess = masterServiceService.hasElementPermission(module, action);
  // return masterServiceService.hasElementPermission(module, action);
  if (!hasAccess) {
    return inject(Router).navigate(['/403']);
  } else {
    return true;
  }

};
