import React , {useState} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import task from "./components/Task";
function App() {

    const [tasks,setTasks] = useState(    [
        {
        id: 1,
        text: 'some text',
        day: 'Aug 29th at 2:30pm',
        reminder: true,
        },
        {
            id: 2,
            text: 'some text2',
            day: 'Aug 30th at 2:30pm',
            reminder: true,
        },
    ])

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
      <Header />
        {tasks.length > 0 ? <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle = {toggleReminder}/>
            : 'No Tasks to show'}
    </div>
  );
}
export default App;
