import { useState } from "react";
import { BehaviorSubject } from "rxjs";
import { useObservableSubscription } from "./UseObservableSubscription";


export const useToast = (initialState: ToastData) => {
  const [open, setOpen] = useState(initialState);
  
  return useObservableSubscription(new BehaviorSubject(""));
};

export interface ToastData {
      open: boolean;
      message: string;
}