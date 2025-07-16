import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ViewPost />,
//     children : [
//       {path: "/", element : <ViewPost/>},
//       {path: "/create-post", element : <CreatePost/>}
//     ]
//   }
//   ,{path: "/create-post", element : <CreatePost/>}
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
