import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreatePost, { createPostData } from './components/CreatePost';
import ViewPost, { postLoaderData } from './components/ViewPost';
import CheckCmp from './components/CheckCmp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {path: "/", element : <ViewPost/>, loader : postLoaderData},
      {path: "/create-post", element : <CreatePost/>, action : createPostData},
      {path: "/check-post", element : <CheckCmp/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
