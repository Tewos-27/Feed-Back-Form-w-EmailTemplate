import React,{useState} from 'react';
import './FeedbackForm.css';
const FeedbackForm = () => {

  const [form, setForm] = useState({
    name:'',
    email:'',
    feedback:''
  });
  
  const handlInput = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationMessage = `
    Name: ${form.name},
    Email: ${form.email},
    Feedback: ${form.feedback}
    `;

    const isconfirm = window.confirm(`please check youre detail \n\n${confirmationMessage}`);
    if(isconfirm){
      setForm({
        name:'',
        email:'',
        feedback:''
      });
    }
    alert('submitted');
  }
  return (
    <>
    <nav>
      Tell US What You Think!
    </nav>
    <form  className="feedback-form" onSubmit={handleSubmit}>
      <h2>We'd Love to Hear From You!</h2>  
      <p>Please share your feedback with us.</p>

      <input type="text" name="name" id="name" placeholder="enter you'r name" value={form.name} onChange={handlInput} required />
      <input type="email" name="email" id="email" placeholder="enter you'r email" value={form.email} onChange={handlInput} required/>
      <textarea name="feedback" id="feedback" placeholder="please enter you'r feedback" value={form.feedback} onChange={handlInput} required/>

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
