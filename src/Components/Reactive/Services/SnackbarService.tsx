import { BehaviorSubject } from "rxjs";
import { ToastData } from "../models/ToastData";

class SnackbarService {
  snackbarSubject = new BehaviorSubject<ToastData>({
    open: false,
    message: "",
  });

  showSnack = (message: string) =>
    this.snackbarSubject.next({
      open: true,
      message,
    });

  hideSnack = () => this.snackbarSubject.next({ open: false, message: "" });
}

export default SnackbarService

