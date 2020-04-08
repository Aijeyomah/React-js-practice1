import React from 'react'
const Name= props=>{
return <div>
    {props.match.params.name}

</div>;
};
export default Name;