import {useState} from "react";
import logo from "../../assets/images/logo.png"


export const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [messages, setMessages] = useState('');

    //  :( useCallback

    const handleClick = () => {
        if(name && email && address && messages){
            alert('send')
        }else{
            alert('error')
        }
    }

    //inline style NO

    return (
        <div style={{
            height: 'auto',
            padding: '16px',
            background: 'black',
            borderTop: '2px solid #F28C28',
            display: "flex",
            justifyContent: "space-around",
            marginTop:'40px'
        }}>

            <div style={{width:'33%', padding:'40px', color:'white'}}>
                <img className="logo" src={logo} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commododolor. Ae</p>
            </div>


            <div style={{width:'33%'}}  className="login">

                <h4 style={{display:'flex', justifyContent:'center'}}>Contact us</h4>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <input
                    className={'input-style'}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'NAME'}
                />
                <input
                    className={'input-style'}

                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'EMAIL'}
                />
                </div>
                <input
                    className={'input-style'}

                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={'ADDRESS'}
                />
                <input
                    className={'input-style'}

                    onChange={(e) => setMessages(e.target.value)}
                    placeholder={'MESSAGES'}
                />


                <button className={'btn-styles'} onClick={handleClick}>Send</button>

            </div>


            <div style={{color:'white', width:'33%',padding:'40px',}}>
                <h1>asdasdasdas</h1>
                <h1>asdasdasdas</h1>
                <h1>asdasdasdas</h1>
                <h1>asdasdasdas</h1>
                <h1>asdasdasdas</h1>
                <h1>asdasdasdas</h1>
            </div>
        </div>
    )
}