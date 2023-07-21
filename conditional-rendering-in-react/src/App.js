
import './App.css';


function Task({name,isDone}){
  let taskContent=name;
  if (isDone){
    taskContent=(
      <del>
      {name + " ✔"}
      </del>
    );
  }
  return(
    <li className="task">
      {taskContent}
    </li>
  )
}
export default function ToDoList() {
  return (
    <section>
      <h1>Javeria's to do list</h1>
      <ul>
        <Task isDone={false} name="Assembly language lab 5"/>
        <Task isDone={true} name="Quran Course"/>
        <Task isDone={false} name="CV edit"/>
        <Task isDone={true} name="conditional rendering task"/>
       
      </ul>
    </section>

   
  );
}


