import App from "./App";
import Profile from "./Profile";
import NotFound from "./NotFound";
import DefaultProfile from "./DefaultProfile";
import TestRoute from "./TestRoute";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: "profile/:name",
		element: <Profile />,
	},
	{
		path: "profile",
		element: <DefaultProfile />,
	},
	{
		path: "test",
		element: <TestRoute />,
	},
];

export default routes;
