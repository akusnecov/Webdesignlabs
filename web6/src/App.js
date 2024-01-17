import "./App.css";
import React, { useState } from "react";
import { Button } from "antd";

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <div className="App__inner__under">
        <div className="App__inner">
          <div className="text__input">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></input>

            <Button
              type="primary"
              onClick={() => {
                setTasks([...tasks, value]);
                setValue("");
              }}
            >
              Добавить
            </Button>
          </div>
            <div className="text__out">
              {tasks.map((task, index) => (
                <div key={index} className="text__out__block">
                  <h2>{task}</h2>
                  <Button
                    type="primary"
                    danger
                    onClick={() => {
                      const filteredTasks = tasks.filter((_, i) => i !== index);
                      setTasks(filteredTasks);
                    }}
                  >
                    Удалить
                  </Button>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
export default App;
