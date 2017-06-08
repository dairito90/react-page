import React from 'react';



class Contact extends React.Component {
  render() {
    return (

        <form className='home-container' >
<h1>LET'S KEEP IN TOUCH</h1>
          <input
            placeholder='your e-mail'
            type='text'
          />
          <button
            className='button'
            type='submit'
            >
              Submit
          </button>
        </form>
    );
  }
}














export default Contact;
