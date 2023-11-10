import AppRouter from "./components/AppRouter.tsx";
import store, {persistor} from "./store/store.ts";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.tsx";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<div className="container">
						<NavBar/>
						<AppRouter />
					</div>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
