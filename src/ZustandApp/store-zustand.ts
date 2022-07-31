/* eslint-disable react-hooks/rules-of-hooks */
import create from 'zustand'

const useStore = create(set => ({
      user: "",
      cartCount: 0,
      login: () => set(() => ({ user: "Matute" })),
      logout: () => set(() => ({ user: "" })),
      addToCart: () => set((state: StoreZustandState) => ({ cartCount: state.cartCount + 1 })),
}))

export interface StoreZustandState {
      user: string,
      cartCount: number, 
      login: Function,
      logout: Function,
      addToCart: Function,
}

export const useLogin = useStore((state: any) => state.login)
export const useLogout = useStore((state: any) => state.logout)
export const useUser = useStore((state: any) => state.user)
export const useAddToCart = useStore((state: any) => state.addToCart)
export const useCartCount = useStore((state: any) => state.cartCount)