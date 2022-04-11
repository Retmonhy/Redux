import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incFunc, addTodo} from './redux/reducers/tasks'
function App() {

  const title = useSelector(store => store.tasks)
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {dispatch(addTodo(text)); setText(''); console.log(title)}}>Add</button>
    </div>
  );
}

export default App;
