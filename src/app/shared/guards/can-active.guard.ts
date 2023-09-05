import { CanActivateFn } from '@angular/router';

export const canActiveGuard: CanActivateFn = (route, state) => {
  if(route.queryParams?.['account'] === 'admin' && route.queryParams?.['password'] === '1234') {
    return true
  }

  return false;
};
