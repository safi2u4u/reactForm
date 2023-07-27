  
  import React,{useState} from "react";
  function Form() {
     const [formData, setFormData] = useState({
       // Initialize form data state
       name: '',
       email: '',
       message: ''
     });
   
     const handleChange = (e) => {
       // Handle input changes and update form data state
       setFormData({
         ...formData,
         [e.target.name]: e.target.value
       });
     };
   
     const handleSubmit = (e) => {
       e.preventDefault();
       // Handle form submission
       console.log(formData); // You can process or submit the form data here
     };
   
     return (
       <form onSubmit={handleSubmit}><br/><br/>0
         <label>
           Name:
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
         </label><br/><br/><br/>
   
         <label>
           Email:
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
           />
         </label><br/><br/><br/>
   
         <label>
           Message:
           <textarea
             name="message"
             value={formData.message}
             onChange={handleChange}
           />
         </label><br/><br/><br/>
   
         <button type="submit">Submit</button>
       </form>
     );
   }
    export default Form