import React from "react";
import "./tab.css";

const Tab = ({ active, onChange }) => {
  const Item = ({ label, selected, onClick }) => {
    return (
      <div className="tab_item" onClick={onClick}>
        <p
          style={{
            color: selected ? "green" : "black",
            textDecoration: selected && "underline",
          }}
        >
          {label}
        </p>
      </div>
    );
  };

  return (
    <div className="tab_container">
      <Item
        label="All"
        selected={active == "All"}
        onClick={() => onChange("All")}
      />
      <Item
        label="Not Completed"
        selected={active == "UnCompleted"}
        onClick={() => onChange("UnCompleted")}
      />
      <Item
        label="Completed"
        selected={active == "Completed"}
        onClick={() => onChange("Completed")}
      />
    </div>
  );
};

export default Tab;
