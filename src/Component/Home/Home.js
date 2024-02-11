import React, { useState } from "react";
import "./Home.css";
import AgeCalculatorForm from "../AgeCalculatorForm/AgeCalculatorForm";
import AgeResult from "../AgeResult/AgeResult";
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns'

export default function Home() {
  const [age,setAge]=useState();

  const calculateAge = (birthDate)=>{
   const today = new Date();
   const birthDateObj = new Date(birthDate);
   const ageYears = differenceInYears(today, birthDateObj);
   const ageMonths = differenceInMonths(today, birthDateObj);
   const ageDays = differenceInDays(today, birthDateObj);
  
   setAge({
    years : ageYears,
    months : ageMonths,
    days : ageDays
   })
  }
  return (
    <div className="container">
    <div className="calculator-container">
      <h1>Age Calculator</h1>
      <AgeCalculatorForm calculateAge={calculateAge}/>
      {age && <AgeResult age={age}/>}
      
    </div>
    </div>
    
  );
}
