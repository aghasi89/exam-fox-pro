import {useState} from "react";

export const Footer = ()=>{

    const [name, setName] = useState('')



    const handleClick =() =>{

    }

    return(
        <div style={{height:'300px', padding:'16px', background: 'black', borderTop: '2px solid #F28C28'}}>
            <div>


            </div>


            <div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'NAME'}
                />
                <input placeholder={'EMAIL'}/>
                <input placeholder={'ADDRESS'}/>
                <input placeholder={'MESSAGES'}/>


                <button onClick={handleClick}>Send </button>

            </div>


            <div>


            </div>
        </div>
    )
}