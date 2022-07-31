import "./index.css";
import { useAddToCart, useCartCount, useLogin, useLogout, useUser } from "./store-zustand";

const LoginSection = () => {
  const login = useLogin()
  const logout = useLogout()
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const UserSection = () => {
  const user = useUser()
  return <div>User: {user}</div>;
};

const AddCartSection = () => {
  const addToCart = useAddToCart()
  return (
    <div>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

const CartCountSection = () => {
  const cartCount = useCartCount()
  return <div>Cart: {cartCount}</div>;
};

export default function ZustandApp() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddCartSection />
      <CartCountSection />
    </div>
  );
}
