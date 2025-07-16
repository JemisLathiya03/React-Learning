import { useContext, useRef } from "react";
import { PostData } from "../store/post-item";
import { useEffect } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostData);

  const navigate = useNavigate();

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postTags = useRef();
  const reactions = useRef();

  // const handleOnSubmit = (event) => {
  //   event.preventDefault();

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       userId: userId.current.value,
  //       title: postTitle.current.value,
  //       body: postBody.current.value,
  //       tags: postTags.current.value.split(" "),
  //       reactions: {
  //         likes: reactions.current.value,
  //       },
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((newPostData) => {
  //       addPost({
  //         id: newPostData.id,
  //         userId: newPostData.userId,
  //         postTitle: newPostData.title,
  //         postBody: newPostData.body,
  //         postTags: newPostData.tags,
  //         reaction: newPostData.reactions.likes,
  //       });
  //       navigate("/");
  //     });

  //   userId.current.value = "";
  //   postTitle.current.value = "";
  //   postBody.current.value = "";
  //   postTags.current.value = "";
  //   reactions.current.value = "";
  // };

  return (
    <div>
      <h3 className="m-3 text-center">Create Your Post</h3>

      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="UserID" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            // ref={userId}
            name="userId"
            id="UserID"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PostTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            // ref={postTitle}
            name="postTitle"
            id="PostTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PostBody" className="form-label">
            Post Body
          </label>
          <textarea
            rows="4"
            type="text"
            // ref={postBody}
            name="postBody"
            className="form-control"
            id="PostBody"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PostTags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            className="form-control"
            // ref={postTags}
            name="postTags"
            id="PostTags"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="PostReaction" className="form-label">
            Post Reactions
          </label>
          <input
            type="text"
            className="form-control"
            // ref={reactions}
            name="reactions"
            id="PostReaction"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};

export const createPostData = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: postData.userId,
      title: postData.postTitle,
      body: postData.postBody,
      tags: postData.postTags.split(" "),
      reactions: {
        likes: postData.reactions,
      },
    }),
  })
    .then((res) => res.json())
    .then((newPostData) => {
      // addPost({
      //   id: newPostData.id,
      //   userId: newPostData.userId,
      //   postTitle: newPostData.title,
      //   postBody: newPostData.body,
      //   postTags: newPostData.tags,
      //   reaction: newPostData.reactions.likes,
      // });
      // navigate("/");
      console.log(newPostData);
    });

  return redirect("/");
};

export default CreatePost;
