import { createContext, useContext } from "react";
import { useObservableSubscription } from "src/Hooks/UseObservableSubscription";
import { ToastData } from "src/Models/ToastData";
import SnackbarService from "src/Services/SnackbarService";

// TODO: Implementar rxjs y contexto de esta manera
// https://github.com/redbee-academy/fe-react/tree/master/src/auth

export const SnackbarContext = createContext<SnackbarService | undefined>(undefined);

export const useSnackbarService = (): SnackbarService => {
      const service = useContext(SnackbarContext);

      if (!service) {
            throw new Error('No SnackbarContext');
      }

      return service;
};

export const useSnackbarSubscription = (): ToastData | undefined => {
      const service = useSnackbarService();

      return useObservableSubscription(service.snackbarSubject);
};