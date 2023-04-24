import React from 'react'
import './footer.css'
import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-decor'>
        <p>© 2023:</p>
        <p>- Built by <br /> Szymon Bosiak</p>
        <p>- Design inspierd by Ronas IT</p>
      </div>

      <div className='footer_content'>

        <div className='footer_content-legal'>
          <h4>"QUEIS TAL" Sp z o.o.</h4>
          <p>67-320 Małomice, ul. Kościuszki 19c</p>
        </div>

        <div className='footer_content-phone contact'>
          <a href="tel:+48.782.243.640">
            <img src={phone} alt="phone icon" />
            <h4>782 243 640</h4>
          </a>
        </div>

        <div className='footer_content-mail contact'>
          <a href="mailto:queistal@gmail.com">
            <img src={mail} alt="e-mail icon" />
            <h4>queistal@gmail.com</h4>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer