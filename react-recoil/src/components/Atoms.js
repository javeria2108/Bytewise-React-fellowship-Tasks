import {
    atom,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';
  import { useState } from 'react';
  import './Atoms.css'
const todoListState = atom({
    key: 'TodoList',
    default: [],
  });
  export default function TodoList() {
    const todoList = useRecoilValue(todoListState);
  
    return (
      <div className='container'>
        <div className='add-todo'>
        <TodoItemCreator  />
        </div>
        <div className='todo-item'>
        {todoList.map((todoItem) => (
          <TodoItem  key={todoItem.id} item={todoItem} />
         
       ))}
        </div>
      </div>
    );
  }
  function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
  
    const addItem = () => {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    };
  
    const onChange = ({target: {value}}) => {
      setInputValue(value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
  
  // utility for creating unique Id
  let id = 0;
  function getId() {
    return id++;
  }
  function TodoItem({item}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
  
    const editItemText = ({target: {value}}) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        text: value,
      });
  
      setTodoList(newList);
    };
  
    const toggleItemCompletion = () => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
  
      setTodoList(newList);
    };
  
    const deleteItem = () => {
      const newList = removeItemAtIndex(todoList, index);
  
      setTodoList(newList);
    };
  
    return (
      <div>
        <input type="text" value={item.text} onChange={editItemText} />
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={deleteItem}>X</button>
      </div>
    );
  }
  
  function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }