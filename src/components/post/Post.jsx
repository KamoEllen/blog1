import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Conflict resolution">
            Conflict resolution
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Theories of peace">
            Theories of peace
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Peace
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Peace has been a topic of philosophical inquiry for centuries, with great thinkers grappling with the concept and its implications for human society. From ancient Greek philosophers like Plato and Aristotle to modern thinkers like Jean-Paul Sartre and Martha Nussbaum, philosophers have explored the nature of peace, the conditions necessary for its realization, and its role in promoting human flourishing. In this blog, we will delve into the philosophical foundations of peace and its significance for contemporary society.
      </p>
    </div>
  );
}
