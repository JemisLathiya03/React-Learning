import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostData } from "../store/post-item";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostData);

  return (
    <div className="card" style={{ width: "30rem", marginBottom: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">{post.postTitle}</h5>
        <p className="card-text">{post.postBody}</p>
        {post.postTags.map((item) => (
          <span key={item} className="badge text-bg-primary tags">
            {item}
          </span>
        ))}
      </div>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => deletePost(post.id)}
      >
        <MdDelete></MdDelete>
      </span>

      <div className="alert alert-success reactions" role="alert">
        There is {post.reaction} reaction is done on this post.
      </div>
    </div>
  );
};

export default Post;
