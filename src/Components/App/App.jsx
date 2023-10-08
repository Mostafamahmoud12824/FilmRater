import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./App.module.css";
import Navbar from '../Navbar/Navbar'
import prevState from '../prevState/PrevState'
import ShowData from '../ShowData/ShowData';
import { Route, Routes } from 'react-router-dom';
import Card from '../Card/Card';


export default function App() {
   
    const [data, setData] = useState([{}])
    const [prevData,setPrev] = useState([])
    const [card , setCard] = useState({})
    const [state, setState] = useState("a")
    useEffect(() => {
       
        const search = async ()=> {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie',{
            params:{
                api_key:"21d6601622ce880a80939f3c1823ce8e",
                query:state
            }})
            const arr = prevData;
            setData(response.data.results);
            arr.push(...response.data.results)
            setPrev(arr)
        }
           let idx = setTimeout(() => {
            if(state){
                search()
            }
           }, 100);
           return ()=>{
               clearTimeout(idx)
           }
        
    }, [state])
    

    const getSearch = (value)=>{
       setState(value);
       setPrev([])
    }
    const filterData=(dataFiltered)=>{
        setPrev(dataFiltered)
    }
    const getCard = (value)=>{
       setCard(value)
    }
    const partition = ()=>{
        let arr =[]
        for (let index = 0; index <= prevData.length; index+=5) {
             arr.push(<ShowData key={index} getCard={getCard} data = {prevData.slice(index,index+5)}/>);
        }
        return arr
    }
    
    const loadMore =()=>{
        setState(String.fromCharCode(state.charCodeAt(0) + 1))
        console.log(prevData);
        setData(prevData)
    }
   
    
  return (
    <div>
      

        <Navbar key={"NavBar"} data = {data} filterData={filterData} getSearch= {getSearch} />
        
        <Routes>
                <Route path="/card" element={ <Card card = {card}  /> } / >  
                <Route path="/" element={ 
                <div className={`${styles.container} mx-auto`}>
                    {partition().map(el => (el))}
                    <button className='btn btn-primary w-100 mt-2' onClick={loadMore}>Read More</button>
                </div> } / >  
        </Routes> 
    </div>
  )
}
