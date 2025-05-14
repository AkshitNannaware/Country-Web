import React from 'react'

const Contact = () => {

  const handleFormSubmit = (formData) => {
      //  console.log(formData.entries());
       const formInputData = Object.fromEntries(formData.entries());
       console.log(formInputData);
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
      <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
          <input type="text" required autoComplete='false' placeholder='enter your name' name='username' className='form-control' />
          <input type="email" required autoComplete='false' placeholder='enter your email' name='email' className='form-control' />
          <textarea className='form-control' rows="10" placeholder='enter your message' name='message' required autoComplete='false' />
          <button type='submit'>send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
