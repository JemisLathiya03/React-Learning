import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostData } from "../store/post-item";
import EmptyPost from "./EmptyPost";
import LoaderSpinner from "./LoaderSpinner";

const ViewPost = () => {
  const { postData, fetching } = useContext(PostData);

  return (
    <>
      {fetching && <LoaderSpinner />}
      {!fetching && postData.length === 0 && <EmptyPost />}
      {!fetching &&
        postData.map((item) => <Post key={item.id} post={item}></Post>)}
    </>
  );
};

export default ViewPost;
