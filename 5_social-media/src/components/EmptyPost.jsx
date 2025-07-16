import { useContext } from "react";
import { PostData } from "../store/post-item";

const EmptyPost = () => {
  return (
    <div>
      <h1> There is no post available yet. </h1>
    </div>
  );
};

export default EmptyPost;
