import React,{ useState } from 'react';
import './FeedbackForm.css'; 

const FeedbackForm = () => {

  const [formdata, setFormData] = useState({
    name:'',
    email:'',
    feedback:''
  });
// This function handles the change in input fields

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formdata, [name]: value
    })
  }
  // This function handles the form submission
  // It prevents the default form submission behavior, confirms the user's details, and resets the form if confirmed
  const handleSubmit = (e) => {
   e.preventDefault();
   const confirmMessage = `
   Name: ${formdata.name},
   Email: ${formdata.email},
   Feedback: ${formdata.feedback}
   `;

   const isConfirm = window.confirm(`Please confirm you'r details: \n\n${confirmMessage}`);
   if(isConfirm){
      console.log('Submitting feedback:', formdata);
      setFormData({
        name: '',
        email: '',
        feedback: ''
      });
      alert('Thank you for your valuable feedback!');
   }
  }
  return (
    <>
    <nav>
      <h2>Tell Us What You Think</h2>
    </nav>

    <form  className="feedback-form" onSubmit={handleSubmit}>
      <h2>We'd Love to Hear From You!</h2>
      <p>Please share your feedback with us.</p>
      
      <input type="text" name="name" id="name" placeholder="enter you'r name" onChange={handleChange} value={formdata.name} required />
      <input type="email" name="email" id="email" placeholder="enter your Email" onChange={handleChange} value={formdata.email} required/>
      <textarea name="feedback" id="feedback" placeholder="Enter your message" onChange={handleChange} value={formdata.feedback} required/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default FeedbackForm

/*import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

  const [formData, setFormData] = useState({name: '', email: '', feedback: ''});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name] : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confimationMessage = `
    Name: ${formData.name},
    Email: ${formData.email},
    Feedback: ${formData.feedback}
    `; 
    const isconfirm = window.confirm(`Please confirm your details!: \n\n${confimationMessage}`);
    if (isconfirm) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };
  return (
    <>
    <nav> 
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input type="text" name="name" placeholder="your name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="your email" value={formData.email} onChange={handleChange} />
        <textarea name="feedback" placeholder="your feedback" value={formData.feedback} onChange={handleChange}/>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FeedbackForm;*/
