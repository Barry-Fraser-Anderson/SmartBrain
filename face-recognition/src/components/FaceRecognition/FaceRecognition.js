import React from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(imageUrl);
  console.log(box);
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' src={imageUrl} alt='face' width='500px' height='auto'></img>
      </div>
      <div
        className='bounding-box'
//        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
      ></div>
    </div>
  );
};

export default FaceRecognition;
