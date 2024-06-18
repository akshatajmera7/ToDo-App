import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { IoAdd } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [tasks, setTasks] = useState(["eat", "sleep", "jump"]);
  const [newTask, setNewTask] = useState("");

  const AddToDo = () => {
    setTasks((t) => [...t, newTask]);
    setNewTask(""); // Clear input after adding
  };

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function upTask(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  function downTask(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }

  return (
    <>
      <Header />
      <div className="flex">
        <input
          type="text"
          placeholder="Enter the task..."
          className="ml-96 border-slate-500 rounded-full placeholder:px-5 px-8 mr-10"
          value={newTask} // Controlled component
          onChange={handleInputChange}
        />
        <button className="" onClick={AddToDo}>
          <IoAdd />
        </button>
      </div>
      <div className="bg-violet-400 ">
        <div className="mx-96 my-10 text-2xl">Your Tasks</div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text-xl w-auto ml-96 mr-10">{task}</span>
              <button
                className="text-xl border-black border-2 mx-2 rounded-lg my-2"
                onClick={() => deleteTask(index)}
              >
                <MdDeleteOutline />
              </button>
              <button
                className="text-xl border-black border-2 mx-2 rounded-lg my-2"
                onClick={() => upTask(index)}
              >
                Up
              </button>
              <button
                className="text-xl border-black border-2 mx-2 rounded-lg my-2"
                onClick={() => downTask(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
