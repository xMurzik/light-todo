import React, { useState } from 'react';

const MainWindow = (props) => {
  let { arr, setArr, setTrue } = props;
  let [name, setName] = useState('');
  let [age, setAge] = useState('');

  function editOnEvent(e) {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'age') {
      setAge(e.target.value);
    }
  }

  function submitButton() {
    if (name !== '' && Number(age) > 0) {
      setArr([...arr, { name, age }]);
      setName('');
      setAge('');
    } else {
      setTrue(true);
    }
  }

  return (
    <div
      style={{
        width: 'min-content',
        height: 'min-content',
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '15px',
        margin: 'auto',
        marginTop: '5%',
        marginBottom: '2%',
      }}
    >
      <h2 style={{ marginBottom: '5px' }}>Name:</h2>
      <input
        type="text"
        placeholder="Type your name"
        style={{
          height: '20px',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1.5px solid gray',
        }}
        value={name}
        name="name"
        onChange={(e) => editOnEvent(e)}
      />
      <h2 style={{ marginBottom: '5px' }}>Age:</h2>
      <input
        type="number"
        placeholder="Type your age"
        style={{
          height: '20px',
          textAlign: 'center',
          borderRadius: '5px',
          border: '1.5px solid gray',
        }}
        value={age}
        name="age"
        onChange={(e) => editOnEvent(e)}
      />
      <button
        style={{
          marginTop: '30px',
          width: '70%',
          height: '25px',
          borderRadius: '10px',
          border: '1.5px solid grey',
        }}
        type="submit"
        onClick={submitButton}
      >
        Create
      </button>
    </div>
  );
};

export default MainWindow;
