import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Feed } from "./Components/Feed/Feed.jsx";
import { Watch } from "./Components/Watch/Watch.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Feed />,
            },
            {
                path: "/watch",
                element: <Watch />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={appRouter} />
        </Provider>
    </React.StrictMode>
);
