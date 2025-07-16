import React, { useEffect, useState } from 'react'
import './App.css'
import Addcontact from './components/Addcontact'
import DisplayContent from './components/displayContent'
import axios from 'axios'

function App() {
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // Fetch contacts from local JSON file
    axios.get('./datas.json')
      .then(response => {
        setContacts(response.data.contacts)
      })
      .catch(error => {
        console.error('Error fetching contacts:', error)
        setError('Failed to load contacts')
      })
  }, [])

  const addHandler = (data) => {
    if (!data.name || !data.number) {
      setError('Please enter both name and number')
      return
    }

    const newContact = {
      id: Date.now().toString(),
      name: data.name.trim(),
      number: data.number.trim(),
      email: ''
    }

    setContacts([...contacts, newContact])
    setError('')
  }

  const deleteHandle = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
    setError('')
  }

  return (
    <div className='main'>
      
      <Addcontact add={addHandler}  />
      <DisplayContent contact={contacts} onDelete={deleteHandle} />
    </div>
  )
}

export default App