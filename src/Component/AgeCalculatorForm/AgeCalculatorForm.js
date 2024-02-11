import React, { useState } from 'react';
import './AgeCalculatorForm.css'

export default function AgeCalculatorForm({calculateAge}) {
    const [birthDate,setBirthDate] = useState();

    const handleChangeDate = (e)=>{
        setBirthDate(e.target.value)
    }

    const handleSubmit = (e)=>{
     e.preventDefault();
      calculateAge(birthDate)
    }
  return (
    <form onSubmit={handleSubmit} className='age-form'>
    <div className='age-data'>
    <div className='age-input'>
    <input type='date' value={birthDate} onChange={handleChangeDate}/>
    </div>
    <div className='age-btn'><button type='submit' disabled={!birthDate}>Calculate Age</button>
    </div>
    </div>
    
    </form>
  )
}
