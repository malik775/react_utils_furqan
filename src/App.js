import { useState } from 'react';
import './App.css';  
import Navbar from './navbar.js';
import NewText from './NewText';
function App() {
const [txColor, setTxColor]= useState('white');
const [bgColor, setBgColor]= useState('black');




const toggle=()=>{
    if (bgColor==='black'){
        document.body.style.backgroundColor = 'black';
        setBgColor('white')
        setTxColor('black')
    }else{
        document.body.style.backgroundColor = 'white';
        setBgColor('black')
        setTxColor('white')
    }
    
}





return (
<>
    <Navbar ourToggle={toggle} bgColor={bgColor} txColor={txColor}/>
    < div class="container">   
      <h1>HELLO WORLD</h1>
<p>lorem here we are In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipediaworking on the react s with the code harry. so  i hope you have to love this work and enoy it very much.
<NewText/>
</p>
</div>
</>
 );    
}
export default App;