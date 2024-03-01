import React from "react";
import AppRouter from "./routes/router";
import { AuthProvider } from './context/AuthContext';
import style from "./styles/styles";

function App() {
  return (
    <div style={style.body.app}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
