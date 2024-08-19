import { useState } from 'react';
import AddItems from './Comp/AddItems'
function App() {
  const [currData, updateData] = useState('');
  const [currArr, updateArr] = useState([]);
  const [index, newIndex] = useState(-1);
  const changeData = (e) => {
    updateData(e.target.value);
  };
  const addData = () => {
    let newArr = [...currArr, currData];
    updateArr(newArr);
    updateData('');
  };
  const deleteItems = (i) => {
    let newArr = currArr.filter((a, b) => b != i);
    updateArr(newArr);
  };
  const updateItems = (i) => {
    newIndex(i);
    updateData(currArr[i]);
  };
  const saveData = () => {
    if (index != -1) {
      let arr = [...currArr];
      arr[index] = currData;
      updateArr(arr);
      updateData('');
    }
  };
  return (
    <>
    <h1>To-Do List Project</h1>
      <input
        type='text'
        placeholder='Enter your Plan'
        value={currData}
        onChange={changeData}
      />
      <button onClick={addData}>Add</button>
      <button onClick={saveData}>Modify</button>
      <ol>
        {currArr.map((a, b) => (
          <AddItems
            element={a}
            updateItems={updateItems}
            deleteItems={deleteItems}
            index={b}
          />
        ))}
      </ol>
    </>
  );
}
export default App;