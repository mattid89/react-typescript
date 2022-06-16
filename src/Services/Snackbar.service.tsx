import { BehaviorSubject } from "rxjs";
import { useObservableSubscription } from "src/Hooks/UseObservableSubscription";

const snackbarSubject = new BehaviorSubject<ToastData>({
      open: false,
      message: ''
});

export const SnackbarSubscription = () => useObservableSubscription(snackbarSubject);

export const showSnack = (message: string) => snackbarSubject.next({
      open: true,
      message
})

export const hideSnack = () => snackbarSubject.next({ open: false, message: '' })

export interface ToastData {
  open: boolean;
  message: string;
}