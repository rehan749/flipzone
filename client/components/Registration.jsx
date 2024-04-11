import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./registration.css";
import axios from "axios";

export default function Registration() {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(signUp) // This will log the sign-in details to the console
    // Here you can implement your login logic, such as sending the sign-in details to your backend

    // Validate password confirmation
    // if (signUp.password !== signUp.cpassword) {
    //     toast.error("Passwords don't match");
    //     return;
    // }
    try {
      const res = await axios.post("http://localhost:5000/singup", signUp);
      console.log(res.data);
      toast.success("Registration successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again later.");
    }

    setSignUp({
        name: "",
        email: "",
        number: "",
        password: "",
      })
  };

  return (
    <div className="registration">
      <form className="form" method="post">
        <p className="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required
            placeholder=""
            onChange={handleChange}
            value={signUp.name}
            name="name"
            type="text"
            className="input"
          />
          <span>Fullname</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            onChange={handleChange}
            value={signUp.email}
            name="email"
            type="email"
            className="input"
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            onChange={handleChange}
            value={signUp.number}
            name="number"
            type="text"
            className="input"
          />
          <span>Number</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            onChange={handleChange}
            value={signUp.password}
            name="password"
            type="password"
            className="input"
          />
          <span>Password</span>
        </label>
        {/* <label>
          <input
            required
            placeholder=""
            name="cpassword"
            type="password"
            className="input"
          />
          <span>Confirm password</span>
        </label> */}
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
}
