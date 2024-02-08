import React from "react";
import AppRouter from "./routes/router";
import { AppProvider } from './context/AppContext'; // Importe o AppProvider

function App() {
  return (
    <div className="App">
      <AppProvider> {/* Envolver a aplicação com o AppProvider */}
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
