import "./App.css";
import Router from "./pages/Router";
import ContextProvider from "./components/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router />
      </ContextProvider>
    </div>
  );
}

export default App;
