import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppRoutes } from "./routes";
import "./styles/global.scss";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
