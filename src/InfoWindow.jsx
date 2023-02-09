import React from 'react';

const InfoWindow = (props) => {
  let { arr } = props;
  return (
    <div
      style={{
        width: '250px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: '15px',
        marginBottom: '5%',
      }}
    >
      {arr.map((elem, id) => {
        return (
          <h2 key={id}>
            {elem.name} - {elem.age}
          </h2>
        );
      })}
    </div>
  );
};

export default InfoWindow;
