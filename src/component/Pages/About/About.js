import React, {useState , useEffect} from 'react'
 
let About =(props)=>{
    const [state, setState]= useState({data:[]})

useEffect(()=>{
    console.log(props)
        console.log(props.location)
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        fetch(url)
            .then(result => result.json())
            .then(result => {
                setState({ data: result });
                props.history.push('/name')
            })
})
    const result = state.data.map((entry, index) => {
        return (
        <li key={index}>{entry}</li>
        )
    })
        return (
        <ul>{result}</ul>
            )
   
   
}


export default About