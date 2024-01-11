import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import photoFolder from '../../assets/images/photo-folder.png'
import blackjack from '../../assets/images/blackjack.png'
import travelTime from '../../assets/images/travel-time.png'
import bookReviews from '../../assets/images/bookReviews.png'
import { useEffect, useState} from 'react'


const Projects = () => {
    
    const projectArray = 'Projects'.split('')

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
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={projectArray}
                        idx={15}
                        />
                    </h1>
                    <ul className='project-list'>
                         <li>  
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/NJiOUFyFuaw?si=kqg9iqwXUePSzB6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <p>A larger scale project I made using React to simulate an ecommerce site to sell my clothes. This app is fully functional with the ability to sort products by price and size, individual item pages with an image carousel and product information, and cart management that tracks number of items and total price.</p>
                        </li>
                        <li>  
                            <a href='https://github.com/cto234/book-reviews' className='link'>
                                <h2>Connor's Book Reviews</h2>
                                <img className='screenshot' src={bookReviews} alt='Book Reviews'/>
                            </a>
                            <p>A little app built using React to let me rate and write reviews for the books I read.</p>
                        </li>
                        <li>  
                            <a href='https://github.com/cto234/travel-time' className='link'>
                                <h2>Travel Time</h2>
                                <img className='screenshot' src={travelTime} alt='Travel Time'/>
                            </a>
                            <p>A React app that calculates the travel times of different travelers such as animals or vehicles between any two points on earth using the Google Maps API and Chakra UI.</p>
                        </li>
                        <li>  
                            <a href='https://github.com/cto234/Photo-Folder' className='link'>
                                <h2>Photo Folder</h2>
                                <img className='screenshot' src={photoFolder} alt='Project Homepage'/>
                            </a>
                            <p>A web app I made using Node, Express, MongoDB, Sass and Handlebars for storing and categorizing images from the web. Simply paste the url to the image in one of your folders to save it. (No email required to register, just create a unique username and password)</p>
                        </li>
                        <li>
                            <a href='https://github.com/cto234/Blackjack' className='link'>
                                <h2>Blackjack</h2>
                                <img className='screenshot' src={blackjack} alt='Blackjack' />
                            </a>
                            <p>A simple game of blackjack I made using Node, Express and Javascript for the CPU logic.</p>
                        </li>
                        <li>
                            <h2 className='more-to-come'>...and more to come!</h2>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Projects