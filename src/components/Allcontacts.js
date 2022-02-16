import React from 'react'
import { useSelector } from 'react-redux'
import Contactcard from './Contactcard'



function Allcontacts() {
    const contacts = useSelector(state => state.allContacts)
    
    return (
        <div>
            {
                contacts.map((element) => {
                    return (
                        <Contactcard
                            name={element.name}
                            mobile={element.mobile}
                            isFav={element.isFav?1:0}
                            id={element.id} 
                        />)
                })
            }


        </div>
    )
}

export default Allcontacts
