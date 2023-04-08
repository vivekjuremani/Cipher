import React,{useState} from "react";
import Dropdown from "./DropDown";
const data1 = [
  { id: 0, label: "Primary" },
  { id: 1, label: "Secondary" },
  { id: 2, label: "Higher Secondary" },
  { id: 3, label: "Graduation" },
  { id: 4, label: "Post Graduation" }
];
const data2 = [
  { id: 0, label: "Schooling" },
  { id: 1, label: "College Student" },
  { id: 2, label: "Teaching" },
  { id: 3, label: "Job" },
  { id: 4, label: "Freelancing" }
];
const Edu = () => {
  const [edit,setEdit] =useState(false);
  return (
    <>
      <div class="mp-professional-box">
        <div class="mp-top-row">
          <div class="mp-left-header">Professional Information</div>
          <div class="mp-right-header" onClick={()=>setEdit(!edit)}>{edit?'Save':'Edit'}</div>
        </div>
        <div class="mp-prof-info-box">
          <div class="mp-link">
            <div class="mp-title">Highest education</div>

            <Dropdown  data={data1} edit={edit}/>
          </div>
          <div class="mp-link">
            <div class="mp-title">What do you do currently?</div>
            <Dropdown  data ={data2} edit= {edit}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Edu;
