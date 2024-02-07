import React from "react";
import AppRouter from "./routes/router";
import { SpeciesProvider } from './context/SpeciesContext'; // Importe o SpeciesProvider

function App() {
  return (
    <div className="App">
      <SpeciesProvider> {/* Envolver a aplicação com o SpeciesProvider */}
        <AppRouter />
      </SpeciesProvider>
    </div>
  );
}

export default App;
