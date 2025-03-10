import './ContactPage.scss'

import React from 'react'

function ContactPage() {
    return (
        <section id='contact-page'>
            <div className="contact-page">
                <h1 className="sectionTitle">Contact Page</h1>

                <form action="https://formsubmit.co/kwasiob@gmail.com" method='post' className='contact-page__form' value="Portfolio ContactPage Submittion">

                    <div className="contact-page__form-group">
                        <label htmlFor="name" hidden> Name</label>
                        <input type="text" name='name' id='name' placeholder='Name' required />
                    </div>

                     <div className="contact-page__email">
                        <label htmlFor="email" hidden> email</label>
                        <input type="text" name='email' id='email' placeholder='Email Address' required />
                    </div>

                    <div className="contact-page__text-area">
                        <label htmlFor="message" hidden> email</label>
                        <textarea type="message" name='message' id='message' placeholder='Message' required ></textarea>
                    </div>
                    
                    {/* <input type="hidden" name='_next' value="https://yourdomain.co/thanks.html" /> */}

                    <input type="submit" value='Submit' className='submit' />
                </form>
            </div>


        </section>
    )
}

export default ContactPage