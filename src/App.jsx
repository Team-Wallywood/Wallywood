import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";

// grid for navbar header main footer
import { Grid } from "./Components/Grid/Grid";

// all my routes
import { AppRoutes } from "./Routes/AppRoutes";

import { FavoritesProvider } from "./Providers/FavoritesContext";

function App() {
  return (
    <>
      <Grid>
        <Header />
        <Navbar />
        <Main>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </Main>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
