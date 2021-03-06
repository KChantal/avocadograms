import React from 'react';
import Draggable from 'react-draggable';

function Tiles({ letter }) {
  return (
    <Draggable grid={[35, 35]}>
      <div className='tiles'> {letter} </div>
    </Draggable>
  );
}
export default Tiles;
