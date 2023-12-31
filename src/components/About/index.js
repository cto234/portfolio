import './index.scss' 

import AnimatedLetters from '../AnimatedLetters'
import bookCover from '../../assets/images/bookCover.jpg'
import javascriptLogo from '../../assets/images/javascriptLogo.png'
import reactLogo from '../../assets/images/reactLogo.png'
import nodeLogo from '../../assets/images/nodeLogo.png'
import htmlLogo from '../../assets/images/htmlLogo.png'
import cssLogo from '../../assets/images/cssLogo.png'
import mongodbLogo from '../../assets/images/mongodbLogo.png'
import javaLogo from '../../assets/images/javaLogo.png'
import pythonLogo from '../../assets/images/pythonLogo.png'
import resume from '../../assets/documents/Connor O\'Doherty Resume 2023.pdf'

import { useEffect, useState} from 'react'

const About = () => {

    const titleArray = 'About me'.split('')

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
        };
      }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={titleArray}
                    idx={15}
                    />
                </h1>
                <p>Hello! I'm Connor O'Doherty, a recent graduate from NYU's College of Arts and Sciences with a Bachelor's degree in Computer Science. I am originally from Portland, Oregon, but I have lived in New York City for 5 years now, and currently reside in Brooklyn. </p>
                <p>During my time at NYU I gained a strong foundation in programming and developed a passion for creating engaging and aesthetically pleasing digital experiences. I am interested in exploring web development, UI/UX design, and software engineering.</p>
                <p>In my free time I enjoy playing guitar, drums, and video games. I love books and I'm currently reading: </p>
                <p className='currentBook'>A Feast for Crows by George R.R. Martin</p>
                <p>Please take a look at my <a href='/projects' className='link'>previous projects</a>, I will be adding more as time goes on, and feel free to contact me through this site!</p>
                <p><a href={resume} className='link'>Click here </a>to view my resume. Below are a few of the technologies I am familiar with!</p>
            </div>
            <img className='bookCover' src={bookCover} alt='Book Cover'></img>
            <div className='logoList'>
                <ul className='logoList-ul'>
                    <li><img className='techLogo' src={javascriptLogo} alt='Javascript Logo'></img></li>
                    <li><img className='techLogo' src={htmlLogo} alt='HTML Logo'></img></li>
                    <li><img className='techLogo' src={cssLogo} alt='CSS Logo'></img></li>
                    <li><img className='techLogo' src={reactLogo} alt='React Logo'></img></li>
                    <li><img className='techLogo' src={nodeLogo} alt='Node Logo'></img></li>
                    <li><img className='techLogo' src={javaLogo} alt='Java Logo'></img></li>
                    <li><img className='techLogo' src={mongodbLogo} alt='MongoDB Logo'></img></li>
                    <li><img className='techLogo' src={pythonLogo} alt='Python Logo'></img></li>

                </ul>
            </div>
           
        </div>
    )
}


export default About

