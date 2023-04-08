import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
const About = () => {
  const [edit, setedit] = useState(false);
  return (
    <div className="mp-about-me-box">
      <div className="mp-top-row">
        <div className="mp-left-header">About me</div>
        <div
          className="mp-right-header"
          onClick={() => {
            setedit(!edit);
          }}
        >
          {edit ? "Save" : "Edit"}
        </div>
      </div>
      <div className="mp-input-box">
        <textarea
          className="mp-about-text"
          placeholder="Add something about you."
          rows="4"
        ></textarea>
        {edit && (
          <span className="mp-pencil-icon">
            <EditIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default About;
