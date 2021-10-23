import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext, themes } from "./providers/Theme/context";
import SpotifyProvider from './providers/Spotify/provider';
import CatFactLayout from "./components/CatFactLayout/CatFactLayout";
import About from "./pages/About/About";
import { constants } from "./constants";

function App() {
  // Renders the first route taht match. Either put "/" route at the end or use "exact" keyword
  return (
    // Je n'oublie pas de mettre les Providers de mes contextes autour des composants qui utiliseront ce contexte.
    <SpotifyProvider>
      <ThemeContext.Provider value={themes.dark}>
        <Router>
          <Switch>
            {/* J'utilise une constante pour gérer mes routes. cf le fichier constants.js */}
            <Route exact path={constants.PATHS.HOME}>
              <CatFactLayout />
            </Route>
            {/* J'utilise une constante pour gérer mes routes. cf le fichier constants.js */}
            <Route path={constants.PATHS.ABOUT}>
              <About />
            </Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </SpotifyProvider>
    
  );
}

export default App;
