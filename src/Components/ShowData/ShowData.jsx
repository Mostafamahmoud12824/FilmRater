import React from 'react'
import styles from './ShowData.module.css'
import { Link } from 'react-router-dom';
function ShowData({data,getCard}) {
  
  return (
    <main className={`${styles.container} d-flex justify-content-between mt-5 text-center mx-auto position-relative`}>
            {data.map((el,index) => (
                
                <div key={`div${index}`} className={`card ${styles.card2} rounded ${styles.rounded3} overflow-hidden`} >
                <img key={`img${index}`} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.backdrop_path}`} height="273px" className="card-img-top" alt="..." />
                <p key={`p${index}`} className={`position-absolute text-white bg-dark rounded rounded-circle ps-2 pe-2 pt-1 pb-1 border border-3 ${(Number(el.vote_average) * 10) >= 70 && !isNaN(Number(el.vote_average)) ?  'border-success' :'border-warning' } ${styles.vote}`}>{Number(el.vote_average) *10}</p>
                <div key={`div1${index}`} className="card-body">
                  <h5 className={`card-title ${el.original_title.length > 18 ? "fs-6" : "fs-6 mt-3"} mt-1`}>{el.original_title}</h5>
                  <p className="card-text">{el.release_date}</p>
                  <Link to="/card" className="btn btn-primary" onClick={()=>getCard(el)}>Details</Link>
                </div>
              </div>  )  
            ) }
    </main>
  )
}

export default ShowData


