import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import HomePage from "./Components/HomePage/HomePage";

import { SnackbarProvider } from "notistack";
function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={2}
        autoDuration={500}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <HomePage />
      </SnackbarProvider>
    </>
  );
}

export default App;
