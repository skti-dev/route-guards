import { CanMatchFn } from '@angular/router';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  console.log({ route, segments })
  if(segments[0]?.path === 'core') {
    return true
  }
  if(segments[1]?.path === 'leads') {
    return true;
  }

  alert('Modulo nao foi carregado')
  return false
};
