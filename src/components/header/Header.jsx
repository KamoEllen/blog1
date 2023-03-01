import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Intro</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPGw-VgOoKEI9z7Jh0w2g-IJj3cp80CBjyw&usqp=CAU"
        alt=""
      />
    </div>
  );
}
