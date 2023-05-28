import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const AdminPanel = (props) => {
  const { handleSubmit, text, link, password, setText, setLink, setPassword } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <Editor
            apiKey="r1zba89rus746522iy1v4z3pzhnkzq5co0aw15d8i2tnwitq" 
            value={text}
            onEditorChange={(content) => setText(content)}
          />
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


