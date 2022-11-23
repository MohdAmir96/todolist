import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import Select from "@mui/material/Select";

function App() {
  const [input, setInput] = useState();
  const [userData, setUserData] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input != "")
      setUserData((prevData) => {
        return [...prevData, input];
      });
    setInput("");
  };
  // delete>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function deleteList(i) {
    const newList = userData.filter((item) => item !== i);
    setUserData(newList);
  }
  // Handle check>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // select control>>>>>>>>>>>>>>>>>>>>>>>>>
  const [option, setOption] = useState(1);

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  console.log(option);
  return (
    <div>
      <form className="container pt-4 form-wrapper">
        {/* ----------------------------------- */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>My Todo</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={option}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value={1}>All</MenuItem>
              <MenuItem value={2}>Completed</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* ----------------------------------------- */}
        <div className="input-wrapper">
          <input
            className="form-input"
            type="text"
            placeholder="Enter to add list"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <Button
            variant="contained"
            sx={{ backgroundColor: "black" }}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
        {option == 1 ? (
          <ol>
            {userData.map((val, index) => {
              return (
                <li className="list">
                  <div className="delete-wrapper">
                    <div>{val}</div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <input
                        value={val}
                        type="checkbox"
                        onChange={handleCheck}
                      />
                      <DeleteIcon
                        onClick={() => deleteList(val)}
                        sx={{
                          color: "black",
                          fontSize: "40px",
                          marginRight: "20px",
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <></>
        )}
        {option == 2 ? (
          <ol>
            {checked &&
              checked.map((item) => {
                return (
                  <>
                    <li className="list">{item.toString()}</li>
                  </>
                );
              })}
          </ol>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default App;
