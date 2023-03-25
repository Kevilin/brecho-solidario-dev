import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Postagem from "./pages/Postagem";
import Info from "./pages/Posts/Info";
import Error from "./pages/Error";
import NotifiqueMe from "./pages/NotifiqueMe";
import Login from "./components/Login/Login";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Signup from "./components/Signup/Signup";
import Logout from "./components/Logout/Logout";

function Rotas() {
    return (
        <UserAuthContextProvider>
            <Routes>
                <Route path="/brecho-solidario/" element={<Home />} />
                <Route path="/brecho-solidario/Explorar" element={<Posts />} />
                <Route path="/brecho-solidario/notifique-me" element={<NotifiqueMe />} />
                <Route path="/brecho-solidario/login" element={<Login />} />
                <Route path="/brecho-solidario/logout" element={<Logout />} />
                <Route path="/brecho-solidario/signup" element={<Signup />} />
                <Route path="/brecho-solidario/publicar" element={<Postagem />} />
                <Route path="/brecho-solidario/explorar/posts/:id" element={<Info />} />
                <Route path="/brecho-solidario/*" element={<Error />} />
            </Routes>
        </UserAuthContextProvider>
    );
}

export default Rotas;
