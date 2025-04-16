import { useUserContext } from "../hooks/contextHooks";

const Logout = () => {
    // TODO: implement
    const {handleLogout} = useUserContext();
    handleLogout();
        return <p>Logout page here</p>;
  };
  
  export default Logout;