import React,{useState} from 'react'
import "./page.css";
const Password = () => {
    const [person, setPerson] = useState({ userName: "", password: ""});
  
    
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setPerson({ ...person, [name]: value });
    };
  
      const handleSubmit = (e) => {
          e.preventDefault();
         
        };
    
    return (
        <div >
        
        <form className="div_data">
        <div >
            <label htmlFor="username">UserName : </label>
            <input
            className="form-control"
              type="text"
              id="userName"
              name="userName"
              value={person.userName}
              onChange={handleChange}
            />
          </div>
          <div >
            <label htmlFor="password">Password : </label>
            <input
            className="form-control"
              type="password"
              id="password"
              name="password"
              value={person.Password}
              onChange={handleChange}
            />
            </div>

            <div className="dis">             
            <button className="sunmit_btn" type="submit" onClick={handleSubmit}>
            add Password
          </button>
          <button className="sunmit_btn">
            Sumit
          </button>

        </div>
        
          </form>

          
        
        </div>
    )
}

export default Password
