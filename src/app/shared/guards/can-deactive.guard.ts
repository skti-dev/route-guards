import { CanDeactivateFn } from '@angular/router';
import { AccountComponent } from '../pages/account/account.component';

export interface AccountCanDeactivateFn<T> extends CanDeactivateFn<T> {}

export const canDeactiveGuard: AccountCanDeactivateFn<AccountComponent> = (component, currentRoute, currentState, nextState) => {
  return component?.exit()
};