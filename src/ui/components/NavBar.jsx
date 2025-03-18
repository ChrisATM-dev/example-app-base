import { useContext } from "react";
import { AuthContext } from "../../auth";

export const NavBar = () => {
    const {logout} = useContext(AuthContext);
  return (
    <nav>
        <span>Tu nombre</span>
        <button onClick={logout}>Logout</button>
    </nav>
  )
}
