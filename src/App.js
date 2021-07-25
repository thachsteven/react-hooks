import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import "./App.scss";
import TodoList from './components/TodoList/index';
import TodoForm from './components/TodoForm/index';
import PostList from './components/PostList/index';
import Pagination from './components/Pagination/index';
import PostFiltersForm from './components/PostFiltersForm/index';
import Clock from './components/Clock/index';
import BetterClock from './components/BetterClock/index';
import MagicBox from './components/MagicBox/index';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love you' },
    { id: 2, title: 'I miss you' },
    { id: 3, title: 'I hate you' },
    { id: 4, title: 'I like you' },
    { id: 5, title: 'I kiss you' },


  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })


  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })


  useEffect(() => {

    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();


        console.log(responseJSON)

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to fetch post list', error.message)

      }

    }

    fetchPostList();

  }, [filters])

  function handlePageChange(newPage) {
    console.log(newPage);

    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  function handlePostChange(newFilters) {
    console.log(newFilters)

    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })

  }

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);

    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValue) {
    console.log(formValue)
    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>React hook - Post List</h1>

      <MagicBox />

      {/* {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
      {/* <TodoList todos ={todoList} onTodoClick = {handleTodoClick}/> */}
      {/* <PostFiltersForm onSubmit={handlePostChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

    </div>
  );
}

export default App;
