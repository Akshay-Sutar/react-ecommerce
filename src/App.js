import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { Appbar } from "./components/Appbar";
import { Banner } from "./components/Banner";
import { AppDrawer } from "./components/Drawer";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { Promotions } from "./components/Promotions";
import { SearchBox } from "./components/Search";
import { UIProvider } from "./context/ui";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
