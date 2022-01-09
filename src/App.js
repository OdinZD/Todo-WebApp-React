import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Shoping for Groceries ',
    day: 'Mar 4th at 10:00am',
    reminder: true,
},
{
    id: 2,
    text: 'College exam',
    day: 'Mar 17th at 4:00pm',
    reminder: true,
},
{
    id: 3,
    text: 'Dentist Appointment',
    day: 'Apr 22nd at 10:00am',
    reminder: false,
}])
// Delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id))
}

  return (
    <div className="container">
      <Header title='Todo App' />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete= {deleteTask} />) : ('No tasks to show')}
    </div>
  );
}
export default App;
