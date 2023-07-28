import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/16779198/pexels-photo-16779198/free-photo-of-lighthouse-on-pier-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Kamogelo">
                Kamogelo
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Examining various philosophical approaches to peace, including pacifism, just war theory, and nonviolent resistance.
        Discussing methods for resolving conflicts peacefully, such as negotiation, mediation, and restorative justice.
        Analyzing the relationship between peace and human rights, including the right to life, freedom from torture, and freedom of expression.
        Exploring ethical questions related to the use of violence in achieving peace, including the morality of self-defense and the limits of just war theory.

          <br />
          <br />
          Examining the role of social justice in promoting peace, including the relationship between poverty, inequality, and violence.
          Discussing the links between environmental degradation and conflict, and exploring strategies for promoting environmental sustainability as a means of achieving peace.
          Examining the role of international institutions and diplomacy in promoting peace and preventing conflict.
        </p>
      </div>
    </div>
  );
}
