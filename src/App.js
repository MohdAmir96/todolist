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
  const [checked, setChecked] = useState([]);
  const [unchecked, setUnChecked] = useState([]);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('todolist')));
  useEffect(() => {
    if (userData)
      localStorage.setItem('todolist', JSON.stringify(userData))
  }, [userData])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "")
      setUserData((prevData) => {
        return [input, ...prevData];
      });
    setInput("");
  };
  // delete>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function deleteList(index) {
    const newList = userData.filter((item, idx) => idx !== index);
    setUserData(newList);
    localStorage.setItem('todos', userData)

  }
  // Handle check>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleCheck = (event) => {
    var compleatedList = [...checked];
    var pendingList = [...unchecked];
    if (event.target.checked) {
      compleatedList = [...checked, event.target.value];
    }
    setChecked(compleatedList);
    const pending = document.getElementsByName('checkbox').checked
    console.log(pending);
  };
  console.log('unchecked', unchecked);
  // select control>>>>>>>>>>>>>>>>>>>>>>>>>
  const [option, setOption] = useState(1);

  const handleChange = (event) => {
    setOption(event.target.value);
  };


  return (
    <div>
      <form className="container pt-4 form-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
              <MenuItem value={3}>Pending</MenuItem>
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
            {userData && userData.map((val, index) => {
              return (
                <li className="list" style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid gray", width: "70%" }}>

                  <div>{val}</div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      name="checkbox"
                      value={val}
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <DeleteIcon
                      onClick={() => deleteList(index)}
                      sx={{
                        color: "black",
                        fontSize: "40px",
                        marginRight: "20px",
                      }}
                    />
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
                    <li className="list">{item}</li>
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
