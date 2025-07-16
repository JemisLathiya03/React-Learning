import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostData } from "../store/post-item";
import EmptyPost from "./EmptyPost";
import LoaderSpinner from "./LoaderSpinner";
import { useLoaderData } from "react-router-dom";

const ViewPost = () => {
  // const { postData, fetching } = useContext(PostData);

  const postData = useLoaderData();

  return (
    <>
      {/* {fetching && <LoaderSpinner />} */}
      {postData.length === 0 && <EmptyPost />}
      {postData.map((item) => (
        <Post key={item.id} post={item}></Post>
      ))}
    </>
  );
};

export const postLoaderData = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  let newPostData = [];
  data.posts.map((item) => {
    const obj = {
      id: item.id,
      userId: item.userId,
      postTitle: item.title,
      postBody: item.body,
      postTags: item.tags,
      reaction: item.reactions.likes,
    };
    newPostData = [...newPostData, obj];
  });
  return newPostData;
};

export default ViewPost;
