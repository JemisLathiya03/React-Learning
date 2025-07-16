import { createContext, useEffect, useReducer, useState } from "react";

export const PostData = createContext({
  postData: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const reducerFunc = (currentVal, action) => {
  let newPostData = currentVal;
  if (action.type === "ADD_POST") {
    newPostData = [action.payload.newPostData, ...currentVal];
  } else if (action.type === "ADD_ALL_POST") {
    newPostData = action.payload.newPostData;
  } else if (action.type === "DELETE_POST") {
    newPostData = currentVal.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostData;
};

const PostDataProvider = ({ children }) => {
  // const DEFAULT_POST_DATA = [
  //   {
  //     id: 1,
  //     userId: "user-11",
  //     postTitle: "Graduation Done",
  //     postBody:
  //       "I successfully done my graduation from L.D. college of engineering",
  //     postTags: ["Gradution", "Study", "College"],
  //     reaction: 5,
  //   },
  //   {
  //     id: 2,
  //     userId: "user-12",
  //     postTitle: "Read Book",
  //     postBody: "After many day, I start the reading of the books.",
  //     postTags: ["Book", "Read"],
  //     reaction: 7,
  //   },
  // ];

  const [postData, dipaturePostData] = useReducer(reducerFunc, []);
  const [fetching, setFetching] = useState(false);

  // useEffect(() => {
  //   setFetching(true);

  //   // const controller = new AbortController();
  //   // const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let newPostData = [];
  //       data.posts.map((item) => {
  //         const obj = {
  //           id: item.id,
  //           userId: item.userId,
  //           postTitle: item.title,
  //           postBody: item.body,
  //           postTags: item.tags,
  //           reaction: item.reactions.likes,
  //         };
  //         newPostData = [...newPostData, obj];

  //         return newPostData;
  //       });
  //       addAllPost(newPostData);
  //       setFetching(false);
  //     });

  //   // return () => {
  //   //   console.log("useEffect is aborted");
  //   //   // controller.abort();
  //   // };
  // }, []);

  const addPost = (newPostData) => {
    console.log(newPostData);
    const actionObj = {
      type: "ADD_POST",
      payload: {
        newPostData,
      },
    };
    dipaturePostData(actionObj);
  };

  const addAllPost = (newPostData) => {
    const actionObj = {
      type: "ADD_ALL_POST",
      payload: {
        newPostData,
      },
    };
    dipaturePostData(actionObj);
  };

  const deletePost = (postId) => {
    const actionObj = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dipaturePostData(actionObj);
  };

  return (
    <PostData.Provider value={{ postData, addPost, fetching, deletePost }}>
      {children}
    </PostData.Provider>
  );
};

export default PostDataProvider;
