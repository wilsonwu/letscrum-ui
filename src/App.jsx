import * as React from "react";
import Container from "@mui/material/Container";
import { Header, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, About } from "./pages";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container
          sx={{
            pt: 2,
            pb: 2,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
