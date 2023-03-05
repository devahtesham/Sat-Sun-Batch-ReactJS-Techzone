import React from "react";
const LearningProps = (props) => {
    
    const {techone,techtwo,techthree} = props
    // const tech1 = props.tech1
    // const tech2 = props.tech2
    // const tech3 = props.tech3
  
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h1>Technologies:- </h1>
        <h3>{techone}</h3>
        <h3>{techtwo}</h3>
        <h3>{techthree}</h3>
      </div>
    </>
  );
};
export default LearningProps;
