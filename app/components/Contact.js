import React from 'react';



class Contact extends React.Component {
  render() {
    return (

        <form className='home-container' >
<h1 className='title'>Let's keep in touch</h1>
          <input
               className='name'
            placeholder='name'
            type='text'
          />
          <input
            placeholder='e-mail'
            type='text'
          />
          <button
            className='button'
            type='submit'
            >
              Send
          </button>
        </form>
    );
  }
}














export default Contact;
