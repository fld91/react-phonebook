import React from 'react'
import { useSelector } from 'react-redux'
import Contactcard from './Contactcard'


function Recent() {
    let recent=useSelector(state=>state.recentContact)
    recent=recent.reverse()
    const contacts = useSelector(state => state.allContacts)
    console.log(recent)
    return (
        <div>
            {
               
                recent.map(currid=>{
                    
                    let currcontact={}
                    contacts.forEach(element => {
                        if(currid===element.id)
                        currcontact=element
                        
                    });
                    return  (<Contactcard
                    name={currcontact.name}
                    mobile={currcontact.mobile}
                    isFav={currcontact.isFav}
                    id={currcontact.id} 
                />)

                })
            }
            
        </div>
    )
}

export default Recent
