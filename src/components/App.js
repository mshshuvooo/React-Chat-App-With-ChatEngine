import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AuthProvider } from "../contexts/authContext";
import Chats from "./Chats";
import Login from "./Login"



function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={ <Login/> } />
            <Route exact path="/chats" element={<Chats/> } />
          </Routes>
        </AuthProvider>
      </Router>
  )
}

export default App
