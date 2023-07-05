import React , {useState, useEffect} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks,setTasks] = useState(    [])

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()
            console.log(data)
        }
        fetchTasks()
    },[])
    //add task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000 + 1)
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
    //delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task)=>
            task.id === id ?
                {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
        {/*sets the value of showAddTask to opposite value and therefore changes the page*/}
      <Header onAdd = {() => setShowAddTask(!showAddTask)}
              showAdd = {showAddTask}/>
        {/*shortcut to if true add task*/}
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle = {toggleReminder}/>
            : 'No Tasks to show'}
    </div>
  );
}
export default App;
