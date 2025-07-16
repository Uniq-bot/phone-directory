import React, { useState } from 'react'

function Addcontact({add}) {
      const [form, setForm] = useState({name: '', number: ''})
      const [error, setError] = useState('')
      const [loading, setLoading] = useState(false)

      const handleChange = (e) => {
        const value = e.target.value
        setForm(prev => ({
            ...prev,
            [e.target.name]: value
        }))
      }

      const submitHandler = (e) => {
        e.preventDefault()
        
        if (!form.name.trim() || !form.number.trim()) {
          setError('Please enter both name and number')
          return
        }

        // Validate phone number length
        if (form.number.length < 10) {
          setError('Phone number must be at least 10 digits')
          return
        }

        setLoading(true)
        setError('')

        try {
          add(form)
          setForm({name: '', number: ''})
        } catch (error) {
          setError('Failed to add contact')
        } finally {
          setLoading(false)
        }
      }
    
  return (
    <div className='input'>
      <h1>Phone Directory</h1>
      {error && (
        <div className='error'>
          {error}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <label className='name'>
          Name to Add: <input type="text" name='name' value={form.name} onChange={handleChange} />
        </label>
        <label className='number'>
          Number to Add: <input type="number" name='number' value={form.number} onChange={handleChange} />
        </label>
        <button type='submit'>Add to Contact</button>
      </form>
    </div>
  )
}

export default Addcontact