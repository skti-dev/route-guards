import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log({ childRoute, state })
  if(state.url === '/core') {
    return true
  }

  if(childRoute.queryParams?.['account'] === 'admin' && childRoute.queryParams?.['password'] === '1234') {
    return true
  }

  return false;
};
