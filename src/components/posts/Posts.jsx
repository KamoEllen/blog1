import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/16831012/pexels-photo-16831012/free-photo-of-pigeons-in-air.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Post img="https://images.pexels.com/photos/16865475/pexels-photo-16865475/free-photo-of-city-building-office-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Post img="https://images.pexels.com/photos/15469264/pexels-photo-15469264/free-photo-of-sea-water-wave-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Post img="https://images.pexels.com/photos/17300131/pexels-photo-17300131/free-photo-of-laguna-halcon-ushuaia-tierra-del-fuego-argentina.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Post img="https://images.pexels.com/photos/16542274/pexels-photo-16542274/free-photo-of-silhouette-at-golden-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    </div>
  );
}
