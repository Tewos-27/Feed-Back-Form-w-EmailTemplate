import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {

  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    feedback: ''
  });

  const handleInput = (e) => {
     const {name, value} = e.target;
     setFormData({
      ...formData, [name] :value
     });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
    Name: ${formData.name},
    Email: ${formData.email},
    Feedback: ${formData.feedback},
    `;

    const isConfirm = window.confirm(`
      Please Check Your Detail!!\n\n${message}`);
      if(isConfirm){
        setFormData({
          name:'',
          email: '',
          feedback: '',
        });
      }
      alert('Submitted you feedback');
  }
  return (
    <>
        <nav>
          tell as what you think about us!!
        </nav>

        <form action="" className="feedback-form" onSubmit={handleSubmit}>
          <h2>Hi there enter your message!!</h2>
          <p>Welcome</p>
          <input type="text" name="name" placeholder="enteryour name" value={formData.name} onChange={handleInput} />
          <input type="email" name="email" placeholder="enter your name" value={formData.email} onChange={handleInput}/>
          <textarea name="feedback" placeholder="enter your message" value={formData.feedback} onChange={handleInput}/>

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
