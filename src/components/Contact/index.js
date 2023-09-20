import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer} from 'react-leaflet'
import { useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const contactArray = 'Contact me'.split('')

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
        };
      }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_14uh3ln', 
            'template_v19ihqm', 
            refForm.current, 
            'Cqmrav7RBrKho55mL'
            ).then(
                () => {
                    alert('Message sent successfully.')
                    window.location.reload(false)
                },
                () => {
                    alert('Message send failure. Please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactArray}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Please feel free to contact me with any questions or inquiries you may have.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Connor O'Doherty
                    <br />
                    Brooklyn, New York
                    <br />
                    <span>connor.t.odoherty@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[40.7080993,-73.953759]} zoom={13} className='map-container'>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact