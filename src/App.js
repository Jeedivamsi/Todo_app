import './App.css';
import React, {useState, useRef} from 'react';

function App() {
  const [data, setData] = useState("")
  const [list, setList] = useState([])
  const inputEle = useRef();

  const handleChange=(e)=>{
      setData(e.target.value)
  }
  const handleSubmit=(e)=>{
      // e.preventDefault();
      inputEle.current.focus();
        const res = [...list, data]
        setList(res)
        setData("")
  }
  const handleDelete=(i)=>{
          const result = list.filter((item,index)=>
          i!==index)
          setList(result);
  }
  return (
    <div className="App">
    <input ref={inputEle} type='text' placeholder="enter some text..." value={data} onChange={handleChange}/>
    <button onClick={handleSubmit}>Add</button>
    <hr/>
    <ul>
      {
        list.length === 0 ? <h3>Todo_List is empty</h3> : list.map((item,index)=>
        <li key={index}>{item}&nbsp;&nbsp;&nbsp;<button onClick={()=>handleDelete(index)}>Remove</button></li>)
      }
    </ul>
    </div>
  );
}

export default App;
