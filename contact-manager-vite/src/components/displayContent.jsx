import React from 'react'

function DisplayContent({contact, onDelete}) {
    const delHandle=(id)=>{
            onDelete(id)
    }

    if (!contact || contact.length === 0) {
        return (
            <div className='no-contacts'>
                <p>No contacts found.</p>
            </div>
        )
    }

    return (
        <div className='contact-list'>
            {contact.map((contac) => (
                <div key={contac.id} className='contact-card'>
                    <div className='contact-info'>
                        <div className='contact-name'>{contac.name}</div>
                        <div className='contact-phone'>{contac.number}</div>
                    </div>
                    <button
  className='delete-button'
  onClick={() => delHandle(contac.id)}
  title='Delete Contact'
>
  🗑️
</button>
                </div>
            ))}
        </div>
    )
  
}

export default DisplayContent