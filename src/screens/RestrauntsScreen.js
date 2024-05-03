import './RestrauntsScreen.css'
import data from '../restrauntData.json'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RestrauntCard from '../components/RestrauntCard'

function RestrauntsScreen(){
    
    const [restrauntData ,setRestrauntData] = useState(data.restrauntData);

    function filterRestrauntByName(e){
        const nameToFilterBy = e.target.value;

        const filterdArray = data.restrauntData.filter((elem)=>{
            if(elem.name.toLowerCase().includes(nameToFilterBy.toLowerCase())){
                return true;
            }
        })

        console.log("from filter by name",filterdArray);

        setRestrauntData(filterdArray);
    }

    function filterRestrauntByRating(e){
        const ratingToFilterBy = e.target.value;

        let filterdArray = data.restrauntData.filter((elem)=>{
            if(elem.rating == ratingToFilterBy){
                return true;
            }
        })

        if(ratingToFilterBy === ""){
            filterdArray = data.restrauntData;
        }

        setRestrauntData(filterdArray);
    }

    return(
        <>
            <main id='restraunts-container'>
                <div id='search-box'>
                    <input type='text' placeholder='Enter restraunt name' onChange={filterRestrauntByName} />
                    <input type='number' placeholder='Enter rating' onChange={filterRestrauntByRating} />
                </div>
                <div id='restraunt-cards-container'>
                    {
                        restrauntData.map((elem)=>{
                            return(
                                <RestrauntCard key={elem._id.$oid} name = {elem.name} address = {elem.address} addressLineTwo = {elem.address_line_2} foodType = {elem.type_of_food} rating = {elem.rating} url = {elem.URL} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default RestrauntsScreen;