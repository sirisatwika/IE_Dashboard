import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import "./styles.css";

function CheckBox() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
       
        <div className="list-container">
          {/* {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))} */}
        </div>
      </div>

      <div>
        {` ${checkedItems}`}
      </div>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
        //   multiple
          value={checked}
          onChange={handleCheck}
        //   input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
        //   MenuProps={MenuProps}
        >
       {checkList.map((item, index) => (
            <div key={index}>
             
              <Checkbox value={item} onChange={handleCheck}  />
              {/* <ListItemText className={isChecked(item)}>{{item}}</ListItemText> */}
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </Select>
      </FormControl>
    </div>
    
  );
}
export default CheckBox;