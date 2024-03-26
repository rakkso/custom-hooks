import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';




const initialState = [/* {
  id: new Date().getTime(),
  description: 'Recolectar la piedra del alma',
  done: false,}
  ,
  {
    id: new Date().getTime()*3,
    description: 'Recolectar la piedra del tiempo',
    done: false,
  }*/
]

const funcionIni =  () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {

  const [ todos, dispatchTodoAction ] = useReducer (todoReducer, initialState,funcionIni);


   
  const onHandleNewTodo = (todo) => {

    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatchTodoAction(action);
    console.log("Recogido:",todo);
  }

  const onHandleDeleteTodo = ( id ) =>{
    const action = {
      type:  '[TODO] Delete Todo',
      payload: id
    }
    dispatchTodoAction(action);

  }

  const onHandleToggleTodo = (id) => {
    const action= {
      type: '[TODO] Toggle Todo',
      payload:id
    }
    dispatchTodoAction(action);

  }

  // cuando cambie el todo guardamos
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
    //total = todos.length;
    //totalHehchos = todos.filter(todo => !todo.done).length;
  }, [todos])
  
  


  return {todos,total:todos.length, totalHechos:todos.filter(todo=> !todo.done).length   , onHandleNewTodo,onHandleDeleteTodo,onHandleToggleTodo}
  
}
