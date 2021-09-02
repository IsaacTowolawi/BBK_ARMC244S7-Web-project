import  React from 'react'
import useForms from "./useForms"
import confirm from "./Confirm"

const Signup = ({submitForms}) => {

    const { handleChange, values, handleSubmit, errors} = useForms(submitForms, confirm)


    return(
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper" onSubmit={handleSubmit }>
                <div className="test">
                    <label htmlFor="name">Name:</label>
                    <input className="name" id="name" name="name" type="text" placeholder="Enter Your Name" value={values.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="test">
                    <label htmlFor="email">Email:</label>
                    <input className="email" id="email" name="email" type="email" placeholder="Enter Your Email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="test">
                    <label htmlFor="password">Password:</label>
                    <input className="password" id="password" name="password" type="password" placeholder="Password here" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="test">
                    <label htmlFor="password2">Confrim Password:</label>
                    <input className="password2" id="password2"  name="password2" type="password" placeholder="Re-enter your password" value={values.password2} onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div>
                    <button className="submit" type="submit"> Sign-Up </button>
                     <span className="submit-login">
                         Already have an account? Sign-in <a href="#">here</a>
                    </span>
                </div>
            </form>
        </div>
    
    )
}

export default Signup