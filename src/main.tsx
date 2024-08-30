import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingComponent from "./Design/LoadingComponent.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
const App = lazy(() => import("./App.tsx"));
const Home = lazy(() => import("./components/Home/Home.tsx"));
const Create_Post = lazy(() => import("./components/Post/Create_Post.tsx"));
const MyPosts = lazy(() => import("./components/Post/MyPosts.tsx"));
const Profile = lazy(() => import("./components/User/Profile.tsx"));
const Posts = lazy(() => import("./components/Post/Posts.tsx"));
const WrongUrl = lazy(() => import("./components/WrongUrl/WrongUrl.tsx"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: "/home/posts",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Posts />
          </Suspense>
        ),
      },
      {
        path: "/home/createPost",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Create_Post />
          </Suspense>
        ),
      },
      {
        path: "/home/myPosts",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <MyPosts />
          </Suspense>
        ),
      },
      {
        path: "/home/profile",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Profile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <WrongUrl />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  </Provider>
);
