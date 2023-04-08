import React,{useState} from "react";
import Handler from "./Handler";
const data = [
  {
    id: "1",
    title: "Linkedin",
  },
  {
    id: "2",
    title: "Facebook",
  },
  {
    id: "3",
    title: "Github",
  },
  {
    id: "4",
    title: "Twitter",
  },
  {
    id: "5",
    title: "Website",
  },
  {
    id: "6",
    title: "Instagram",
  }

]


const SocialHandle = () => {
  const [edit,setEdit] =useState(false);
  return (
    <div className="mp-web-links-box">
      <div className="mp-top-row">
        <div className="mp-left-header">On the web</div>
        <div className="mp-right-header" onClick={()=>setEdit(!edit)}>{edit?'Save':'Edit'}</div>
      </div>
      <div className="mp-links-box">
  { 
  data.map((item)=>{
   return  <Handler data={item} edit={edit}/> }
  )
  }
    </div>
    </div>
  );
};
export default SocialHandle;
