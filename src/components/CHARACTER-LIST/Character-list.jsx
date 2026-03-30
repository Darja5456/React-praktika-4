//import Task from "../Task/Task.jsx";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CharacterCard from '../CharacterCard/CharacterCard';


function CharacterList() {
   const [tasks, setTasks] = useState([{
    id: uuidv4(),
    name: "Sveta",
    age: 35,
    job: "Mage",
    image: "https://pbs.twimg.com/media/CUcleNsUwAA6Mxi.png"
   },
   {
    id: uuidv4(),
    name: "Antoshka",
    age: 29,
    job: "Hero",
    image: "https://media.licdn.com/dms/image/v2/C4E12AQGrbMEeJh76_w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1574289430538?e=2147483647&v=beta&t=zKI7lxit5aK8r-QxzdtEiCFwP3huiSBF3EdnaD51Xtk"
   },
   {
    id: uuidv4(),
    name: "Xiaomi",
    age: 5,
    job: "Robot",
    image: "https://sketchok.com/images/articles/01-cartoons/106-the-wild-robot/01/23m.jpg"
   },
  {
    id: uuidv4(),
    name: "Jura",
    age: 40,
    job: "Archer",
    image: "https://i.pinimg.com/736x/53/5a/25/535a25778fd6363a872962666247583e.jpg"
   },
  {
    id: uuidv4(),
    name: "Zina",
    age: 62,
    job: "Healer",
    image: "https://t4.ftcdn.net/jpg/07/16/77/61/360_F_716776115_mRdcgmUPaZO3w9DHlPfcmtvjWOpOEJeE.jpg"
   },
  {
    id: uuidv4(),
    name: "Vania",
    age: 19,
    job: "Soldier",
    image: "https://www.shutterstock.com/image-photo/full-body-image-indian-army-600nw-2648723525.jpg"
   }]);
  const [nameInput, setNameInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  const [ageInput, setAgeInput] = useState("");

  const [jobInput, setJobInput] = useState("");

  const [imageInput, setImageInput] = useState("");

  function addTask() {
    if (!nameInput.trim()) return;

    const newTask = {
      id: uuidv4(),
      name: nameInput, 
      age: ageInput, 
      job: jobInput, 
      image: imageInput, 
    };
    setTasks((prev) => [...prev, newTask]);
    setNameInput("");
    setAgeInput("");
    setJobInput("");
    setImageInput("");

  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editTaskId) {
      updateTask();
    } else {
      addTask();
    }
    console.log(tasks);
  }

  function deleteTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }
  function startEdit(task) {
    setNameInput(task.name);
    setAgeInput(task.age);
    setJobInput(task.job);
    setImageInput(task.image);
    setEditTaskId(task.id);
    
  }
  function updateTask() {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editTaskId ? { ...task, name: nameInput, age: ageInput, job: jobInput, image: imageInput } : task,
      ),
    );
    setEditTaskId(null);
    setNameInput("");
    setAgeInput("");
    setJobInput("");
    setImageInput("");

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placheholder="Type your name..."
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            type="number"
            placheholder="Type your age..."
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
          />
          <input
            type="text"
            placheholder="Type your job..."
            value={jobInput}
            onChange={(e) => setJobInput(e.target.value)}
          />
          <input
            type="text"
            placheholder="Type your image..."
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />
          <button type="submit">{editTaskId ? "Update" : "Add task"}</button>
        </form>
      </div>
      <div className="cards">
        {tasks.map(character =>(
          <CharacterCard
            key={character.id}
            props={character}
            name={character.name}
            age={character.age}
            job={character.job}
            image={character.image}

            onEdit={startEdit}
            onDelete={deleteTask}
            showActions={true}
          />
        ))}
      </div>
    </>
  );
}

export default CharacterList;