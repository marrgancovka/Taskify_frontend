import { Provider } from "react-redux";
import AppRoutes from "../src/routes";
import {store} from './store/store'

function App() {
  return (
  <Provider store={store}>
      <AppRoutes />
  </Provider>
  )
}

export default App;
