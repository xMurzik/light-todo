import React from 'react';

const Error = (props) => {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          width: '50%',
          height: '60%',
          top: '30px',
          left: '50%',
          marginLeft: '-25%',
          backgroundColor: 'white',
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '10%',
            backgroundColor: 'purple',
            borderRadius: '10px 10px 0px 0px',
          }}
        >
          <button
            style={{
              height: '100%',
              position: 'absolute',
              width: '50px',
              right: '0%',
              border: '0px solid black',
              cursor: 'pointer',
              borderRadius: '0px 9px 0px 0px',
            }}
            onClick={() => props.setTrue(false)}
          >
            X
          </button>
        </div>
        <h1
          style={{
            position: 'absolute',
            left: '50%',
            top: '40%',
            width: '300px',
            marginLeft: '-150px',
          }}
        >
          Check inputs for errors
        </h1>
      </div>
    </div>
  );
};

export default Error;
