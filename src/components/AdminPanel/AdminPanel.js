import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AdminPanel = (props) => {
  const { handleSubmit, text, link, password, setText, setLink, setPassword } =
    props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <ReactQuill value={text} onChange={(value) => setText(value)} />
        </label>
        <label>
          Link:
          <input
            className="main-input-search"
            type="text"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="main-input-search"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AdminPanel;
