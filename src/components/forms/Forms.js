import React, { useState } from 'react';
import Signup from "./Signup";
import Success from "./Success"

export const Forms = () => {
    const [mainSubmit, setMainSubmit] = useState(false)

    function submitForms(){
        setMainSubmit(true)
    }
    return (
        <div>
           {!mainSubmit ? <Signup submitForms={submitForms} /> : <Success />}
        </div>
    )
}

export default Forms
