import React, { useRef } from 'react'
import styles  from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Img from '../../img.svg'


function Navbar({data,getSearch,filterData}) {

  const search_data = useRef(null)
  const filter =(type)=>{
    const dataFiltered = data.filter((el)=>{
      if(el.release_date.slice(0,3) >= "2019" && type === 'new')
        return el;
      if(el.vote_average >= "7" && type === 'vote')
        return el;
    })
    filterData(dataFiltered);
  }
  const search = ()=>{
    getSearch(search_data.current.value);
  }
  return (
    <nav className={``}>
      
        <ul className={`nav ${styles.container} pt-3 pb-2 mx-auto position-relative`}>
          <li className="nav-item">
            <img src={Img} alt="" width="154px" height="20px"/>
          </li>
          <li className="nav-item  ms-3 me-2">
            <button className="nav-link  text-white" onClick={()=>filter("new")}>Newest</button>
          </li>
          
          <li className="nav-item ms-2 me-2">
            <button className="nav-link  text-white" onClick={()=>filter("vote")}>Vote</button>
          </li>
          <li className={`nav-item ms-0 me-5 ${styles.search} d-flex position-absolute ` }>
            <input type="text" className={`rounded rounded-pill `} ref={search_data} onChange={search}/>
            <button className={`nav-link  text-white ms-3`} onClick={search}><FontAwesomeIcon icon={faSearch} /> </button>
          </li>
        </ul>
        
    </nav>
  )
}
export default React.memo(Navbar)