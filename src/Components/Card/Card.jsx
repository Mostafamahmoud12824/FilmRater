import { faHeart, faSave, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from  './Card.module.css'
import Img from '../../img.svg'
export default function Card({card}) {

    const mystyle = {
        backgroundImage: `linear-gradient(to right, rgba(146, 146, 146, 0.8) 150px, rgba(146, 146, 146, 0.8) 100%),url(https://www.themoviedb.org/t/p/w220_and_h330_face/${card.poster_path})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100%',
        height:'70vh'
      };
    
    return (
        <>
        <div style={mystyle} className={`w-100`}>
            <div className={`${styles.container} mx-auto row`}>
                <div className='col-4'>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${card.poster_path}`} className={`rounded rounded-3 text-center mt-5`} width="300px" height="450px" alt=""  />
                </div>
                <div className='col-8 text-white mt-5'>
                    <h2>{card.original_title}({card.release_date.slice(0,4)})</h2>
                    <p><span className={`border border-1 border-secondary text-secondary `}>PG-13</span> {card.release_date}(US) . {card.title} </p>
                    <div className={`d-flex justify-content-start`}>
                        <p className={`position-absolute text-white bg-dark rounded rounded-circle ps-2 pe-2 pt-1 pb-1 border border-3 ${(Number(card.vote_average) * 10) >= 70 && !isNaN(Number(card.vote_average)) ?  'border-success' :'border-warning' }`}>{Number(card.vote_average) *10}</p>
                        <p className={`ms-5 text-secondary bg-dark rounded rounded-circle border border-3 ps-2 pe-2 pt-1 pb-1 border-secondary`} ><FontAwesomeIcon icon={faHeart}/></p>
                        <p className={`ms-5 text-secondary bg-dark rounded rounded-circle border border-3 ps-2 pe-2 pt-1 pb-1 border-secondary`}><FontAwesomeIcon icon={faStar}/></p>
                        <p className={`ms-5 text-secondary bg-dark rounded rounded-circle border border-3 ps-2 pe-2 pt-1 pb-1 border-secondary`}><FontAwesomeIcon icon={faSave}/></p>
                    </div>
                    <p className={`text-secondary `}>Return to the magic.</p>
                    <p className={`text-white fw-bolder fs-3`}>Overview</p>
                    <p>{card.overview}</p>
                    <div className={`d-flex justify-content-between fs-5`}>
                        <p>David Yates</p>
                        <p>Steve Kloves</p>
                        <p>J.K. Rowling</p>
                    </div>
                    <div className={`d-flex justify-content-between fs-6 `}>
                        <p>Director</p>
                        <p>screenPlay</p>
                        <p>screenPlay</p>
                    </div>

                </div>
            </div>
        </div>
        <footer>
        <footer class="single_column movie header_large">
      <nav className='d-flex justify-content-center text-white text-decoration-none'>
        <div class="p-4">
          <img src={Img} alt="" width="130" height="94" />

          
            <a className={`btn btn-outline-light text-primary  bg-white ${styles.move}`} href="/signup">Join the Community</a>
          
        </div>

        <div className='p-4'>
          <h4 className='ms-4 '>The Basics</h4>
          <ul className=''>
            <li><a href="/about">About TMDB</a></li>
            <li><a href="/about/staying-in-touch">Contact Us</a></li>
            <li><a href="/talk">Support Forums</a></li>
            <li><a href="/documentation/api">API</a></li>
            <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener" >System Status</a></li>
          </ul>
        </div>
        <div className='p-4'>
          <h4 className='ms-4'>Get Involved</h4>
          <ul>
            <li><a href="/bible"><span class="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
            <li><a href="/movie/new">Add New Movie</a></li>
            <li><a href="/tv/new">Add New TV Show</a></li>
          </ul>
        </div>
        <div className='p-4'>
          <h4 className='ms-4'>Community</h4>
          <ul>
            <li><a href="/documentation/community/guidelines">Guidelines</a></li>
            <li><a href="/discuss">Discussions</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
          </ul>
        </div>
        <div className='p-4'>
          <h4 className='ms-4'>Legal</h4>
          <ul>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/documentation/api/terms-of-use">API Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>
    </footer>
        </footer>
        </>
    )
}
