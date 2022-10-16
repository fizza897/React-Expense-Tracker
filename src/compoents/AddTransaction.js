import React,{useState} from 'react'

export default function AddTransaction() {

const [description,setdescription]=useState('')
const [TranscriptionAmount,setTransctionAmount]=useState(0)
return (
    <div><h3>AddTransaction</h3>
    <form >
        <div className='form-control'>
            <label htmlFor='description'>Description
                <input type="number" id='description'value={description} onChange={(e)=>setdescription(e.target.value)} />
            </label>
        </div>
        
        <div className='form-control'>
            <label htmlFor='Transcription Amount'>Transcription Amount
                <input type="text" id='Transcription Amount' value={TranscriptionAmount} onChange={(e)=>setTransctionAmount(e.target.value)} />
            </label>
        </div>
        <button className='btn'>Add Transcription</button>
        
    </form>
    </div>
  )
}