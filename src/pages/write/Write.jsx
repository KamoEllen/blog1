import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnr4kyLi9E1dxe3xFeP4dJmprQm1KYbju4LQ&usqp=CAU"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
