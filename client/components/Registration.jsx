import { useState } from 'react'
import './registration.css'
import axios from 'axios'

export default function Registration() {
    const[signUp, setSignUp] = useState({name:'',email:'',number:'', password:'',})

    const handleChange = (e) => {
        setSignUp({...signUp, [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(signUp) // This will log the sign-in details to the console
        // Here you can implement your login logic, such as sending the sign-in details to your backend
       try {
        const data = await axios.post('http://localhost:5000/singup',signUp)
        console.log(data)
       } catch (error) {
        console.log(error)
       }
   
    }

  return (
  
    <div className="registration">

    <form className="form" method='post'>
    
    <p className="message">Signup now and get full access to our app. </p>
       
        <label>
            <input required placeholder="" onChange={handleChange} value={signUp.name} name='name' type="text" className="input"  />
            <span>Fullname</span>
        </label>

         
            
    <label>
        <input required placeholder="" onChange={handleChange} value={signUp.email} name='email' type="email" className="input" />
        <span>Email</span>
    </label> 
    <label>
        <input required placeholder="" onChange={handleChange} value={signUp.number} name='number' type="text" className="input" />
        <span>Number</span>
    </label> 
        
    <label>
        <input required placeholder="" onChange={handleChange} value={signUp.password} name='password' type="password" className="input" />
        <span>Password</span>
    </label>
    <label>
        <input required placeholder="" name='cpassword' type="password" className="input" />
        <span>Confirm password</span>
    </label>
    <button className="submit" onClick={handleSubmit}>Submit</button>
    
</form>
    </div>
    
  )
}
