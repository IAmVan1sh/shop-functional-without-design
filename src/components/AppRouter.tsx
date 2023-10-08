import {Navigate, Route, Routes} from "react-router-dom";
import publicRoutes from "../utils/routes.tsx";
import {MAIN_ROUTE} from "../utils/consts.ts";

const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map(route =>
				<Route key={route.path} path={route.path} element={route.element}/>
			)}
			<Route path="/*" element={ <Navigate to={MAIN_ROUTE} /> }/>
		</Routes>
	);
};

export default AppRouter;