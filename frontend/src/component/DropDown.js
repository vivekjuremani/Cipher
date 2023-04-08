import React, { useState, useEffect } from "react";

// const data = [
//   { id: 0, label: "Primary" },
//   { id: 1, label: "Secondary" },
//   { id: 2, label: "Higher Secondary" },
//   { id: 3, label: "Graduation" },
//   { id: 4, label: "Post Graduation" }
// ];

const Dropdown = ({data,edit}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(1);

  const toggleDropdown = () => {edit&&setOpen(!isOpen)};

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div >
      <div className="mp-input-link" onClick={toggleDropdown}>
     
     <span class="mp-link-text">
     {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : "Select your destination"}
     </span>
     <span></span>
        <img
          src="./BottomArrow.ecc4e39cf0b7dd9d466af346b29bcddd.svg"
          width="10px"
          class="open"
          alt="bottom-arrow"
        />
      </div>
      <div className={`mp-edu-option ${isOpen&& edit && "open"}`}>
        {items.map((item) => (
          <div
          className={`option-block  ${
            item.id == selectedItem && "edu-option-selected"
          }`}
            onClick={(e) => {
              handleItemClick(e.target.id) 
              setOpen(false);
            }}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
