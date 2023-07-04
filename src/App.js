import React , {useState} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {

    const [tasks,setTasks] = useState(    [{
        id: 1,
        text: 'some text',
        day: 'Aug 29th at 2:30pm',
        reminder: true,
    }])

  return (
    <div className="container">
      <Header />
        <Tasks tasks = {tasks}/>
    </div>
  );
}
export default App;
