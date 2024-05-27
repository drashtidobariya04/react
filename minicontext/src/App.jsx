import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile.1";

export function App() {
  return (
    <UserContextProvider>
      <h1>drashti</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}
