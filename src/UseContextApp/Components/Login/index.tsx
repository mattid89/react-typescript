import { useContext } from "react";
import { UserContext } from "src/UseContextApp/Contexts/UserContext";

export const Login = () => {
  const user = useContext(UserContext);

  return (
    <>
      <div>Login</div>
      <br />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
