import './App.css';
import React,{useState} from "react";

const App = function(){
   const [todo, setTodo] = useState([
    { id : 1, title: "코딩", detail: "어려워요"},
    { id : 2, title: "리액트 어려움", detail: "완성 못했어요 ㅠ"},
  ]);

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  //제목 입력
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  //내용 입력
  const detailChangeHandler = (event) => {
    setDetail(event.target.value);
  }
  //추가하기 버튼
  const clickAddButtonHandler = () => {
    const newUser = {
      id : todo.length + 1,
      detail,
      title,
    }
   setTodo([...todo, newUser]);
  }
  // 삭제하기 버튼
  const clickRemoveButtonHandler = (id) => {
    const newTodo = todo.filter(user => user.id !== id);
    setTodo(newTodo);
  }
  //완료 버튼
  const clickClearButtonHandler = () =>{
    const clearUser = todo.map(function(item){
     if(item.id){
        item.isDone = !item.isDone;
      }
      return item;
    })
   setTodo(clearUser);
  }

  return(
    <div className='body'>
      <div>
        My Todo List
      </div>
      <div className='header'>
      제목 &nbsp;
      <input className='header-name' value={title} onChange={titleChangeHandler}/>
      내용 &nbsp;
      <input className='header-name' value={detail} onChange={detailChangeHandler}/>
      <button className='add-button' onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <div className='working'>Working</div>
       <div className='app-style'>      
       {todo.map(function(item){
          return <User key={item.id} item = {item} clickRemoveButtonHandler = {clickRemoveButtonHandler}
          clickClearButtonHandler = {clickClearButtonHandler}/>
        })
      }
      
    </div>
    <div className='done'>Done</div>
    </div>
  )
}

const User = ({item, clickRemoveButtonHandler, clickClearButtonHandler}) => {
  return (
    <div key={item.id} className='component-style'>
      <h1>
        {item.title}
      </h1>
      <div className='component-detail'>
       {item.detail}
      </div>
      <button className='component-delete' onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
      <button className='component-clear' onClick={() => clickClearButtonHandler(item.id)}>
      {item.isDone ? "취소" : "완료"}</button>
    </div>
  )
}
export default App;
