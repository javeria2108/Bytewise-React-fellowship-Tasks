import { RecoilRoot } from 'recoil';
import TodoList from './components/Atoms';
import './App.css';
function App() {
  return (
   <RecoilRoot >
    <header>To Do List Using Recoil</header>
    <div className='body'>
    
     <TodoList></TodoList>
     </div>
   </RecoilRoot>
  );
}

export default App;
