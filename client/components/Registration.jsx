import './registration.css'

export default function Registration() {
  return (
  
    <div className="registration">

    <form className="form">
    
    <p className="message">Signup now and get full access to our app. </p>
       
        <label>
            <input required placeholder="" name='name' type="text" className="input"  />
            <span>Fullname</span>
        </label>

         
            
    <label>
        <input required placeholder="" name='email' type="email" className="input" />
        <span>Email</span>
    </label> 
    <label>
        <input required placeholder="" name='number' type="text" className="input" />
        <span>Number</span>
    </label> 
        
    <label>
        <input required placeholder="" name='password' type="password" className="input" />
        <span>Password</span>
    </label>
    <label>
        <input required placeholder="" name='cpassword' type="password" className="input" />
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    
</form>
    </div>
    
  )
}
