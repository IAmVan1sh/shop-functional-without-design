import AppRouter from "./components/AppRouter.tsx";
import store, {persistor} from "./store/store.ts";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter, Link} from "react-router-dom";
import styles from "./App.module.scss";

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<div className={styles.popUp}>The project is currently hosted from the <span>createAsyncThunk</span> branch. Go to my <Link to={"https://github.com/IAmVan1sh/react-rtk-trainy-project"}>GitHub</Link> to view the <span>main</span> branch.</div>
					<AppRouter />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
