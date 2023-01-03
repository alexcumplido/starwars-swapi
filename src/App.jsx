import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { RequireAuth } from "./components/RequireAuth/RequireAuth.jsx";
import { ListSpaceships } from "./pages/ListSpaceships/ListSpaceships.jsx";
import { CardSpaceship } from "./pages/CardSpaceship/CardSpaceship.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ErrorRoute } from "./components/ErrorRoute/ErrorRoute.jsx";

export const AuthContext = createContext(false);

export function App() {
  const [userAuth, setUserAuth] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  const showSignup = () => {
    setLogin(false);
    setSignup(true);
  };

  const showLogin = () => {
    setSignup(false);
    setLogin(true);
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ userAuth, setUserAuth }}>
        <Header showSignup={showSignup} showLogin={showLogin} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                login={login}
                signup={signup}
                setLogin={setLogin}
                setSignup={setSignup}
              />
            }
          />
          <Route
            path="/spaceships"
            element={
              <RequireAuth>
                <ListSpaceships />
              </RequireAuth>
            }
          />
          <Route path="/item/:id" element={<CardSpaceship />} />
          <Route path="*" element={<ErrorRoute />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
