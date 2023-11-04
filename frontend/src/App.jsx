import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./pages/chat/Chat";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
