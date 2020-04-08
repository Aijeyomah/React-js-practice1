import React, { useState } from 'react'
import './Table.css'
import Form from '../Form/form'
import Button from '../Button/Button'

const Table = (props) => {

    const [state, setState] = useState({
        characters:[
        {
        id:1,
        name: "Charlie",
        job: "Janitor",
        income: "$1000"
        },
        {
        id:2,
        name: "Mac",
        job: "Bouncer",
        income: "$2000"
        },
        {
        id:3,
        name: "Dee",
        job: "Aspring actress",
        income: "$8000"
        },
        {
        id:4,
        name: "Dennis",
        job: "Bartender",
        income: "$5000"
        }
    ]})

   const deleteRow = (id) =>{
        setState({
            characters: state.characters.filter((character, i)=>{
                return i !== id
            })
        })      
    }

     const handelSubmit =(character) =>{
        setState({
            ...state,
            characters: [...state.characters, character]
        })
    }

    return (
        <div className="table">
                {state.characters.length !== 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>JOB</th>
                            <th>INCOME</th>
                            <th>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.characters.map((character, id) => {
                            return(
                                <tr key={id}>
                                    <td>{character.name}</td>
                                    <td>{character.job}</td>
                                    <td>{character.income}</td>
                                    {<td onClick={() =>deleteRow(id)}> <Button text="Delete"/> </td> }
                                    {/* <td><button className="btn" onClick={() =>deleteRow(id)}>Delete</button></td> */}
                                </tr>
                            );
                        })}
                                
                    </tbody>
                </table>: <div>Table data is empty, please fill the form to add the table </div> }
                <div className='form'><Form submit={handelSubmit}/></div>
            </div>
    )
}

export default Table

