import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ViewPost from "./components/ViewPost";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostDataProvider from "./store/post-item";
import CheckCmp from "./components/CheckCmp";
import { Outlet } from "react-router-dom";

function App() {
  const [postTab, setPostTab] = useState("viewPost");

  return (
    <PostDataProvider>
      <div className="social-media-container">
        <SideBar></SideBar>
        <div className="header-footer">
          <div className="view-area-header">
            <Header></Header>
            <div className="view-area">
              {/* {postTab === "viewPost" ? <ViewPost /> : <CreatePost />} */}
              {/* {postTab === "viewPost" && <ViewPost /> }
              {postTab === "createPost" && <CreatePost /> }
              {postTab === "checkPost" && <CheckCmp /> } */}
              <Outlet />
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </PostDataProvider>
  );
}

export default App;
