import AppRouter from "./router/AppRouter";

;

function App() {
  return (
    <themeContextProvider>
     <AppRouter/>
    </themeContextProvider>
  );
}

export default App;
