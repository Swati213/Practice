import React ,{useState}from 'react'
import "./page.css";

const Education = () => {
  
    const [person, setPerson] = useState({ firstName: "", email: ""});
  
    
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
            <label htmlFor="firstName">Name : </label>
            <input
            className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div >
            <label htmlFor="email">Email : </label>
            <input
            className="form-control"
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
            <div className="dis" >          
            <button  className="sunmit_btn" type="submit" onClick={handleSubmit}>
            add Education
          </button>
          <button className="sunmit_btn">
            Next
          </button>
          </div>
   
        </div>
          </form>

           
        </div>
    )
}

export default Education
