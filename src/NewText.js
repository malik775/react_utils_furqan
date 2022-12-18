import React,{useState} from 'react'
 function NewText() {
  const [text, setText] = useState();
  const [len, setLen] = useState();
  function handleChange(e) {
    setText(e.target.value); 
    setLen(e.target.value.length.uppercase)
  }
  
console.log(text);

  return (
    <>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="ex" onChange={handleChange} defaultValue='abc' rows="3"></textarea>
    <button className='btn btn-primary' >Convert to uppercse</button>
  </div>
  <div className='container'>
    <h1>Your text summary</h1>
  <p style={{}}>{len} words and  character</p>
  </div>  
  </>
  )
}
export default NewText;