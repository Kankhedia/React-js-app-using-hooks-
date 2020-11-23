import React, { useState } from 'react';



const App =() =>{
  const purple = 'yellow';
  const [bg,setBg]=useState(purple);
  const [name,setName]=useState('Click me');
  

  const bgChange =() =>{
   
    let newBg='red';
    setBg(newBg);
    //console.log('clicked');
    
    setName('Hello :wolf');
};

const bgBack = ()=>{
  setBg('Blue');
  setName('Hello !!: Tiger');

};
 return (

    <>
     <div style = {{backgroundColor:bg}}>
     
  <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name}</button>
    </div>
    </>
  );


};

export default App;