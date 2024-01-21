import React from "react";
import './Button.css'

export function Testbutton() {
 return (
     <button className={"button"} onClick={function(){console.log('Test')}}>Confirm</button>
 )
}