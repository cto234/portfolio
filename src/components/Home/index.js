import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ' Connor,'.split('')
    const jobArray = 'web developer'.split('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
        };
      }, []);
      

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _12`}>,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'</span>
                    <span className={`${letterClass} _14`}>m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/> 
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer, Software Engineer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home