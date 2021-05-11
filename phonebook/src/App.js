import React, { useState, useEffect } from 'react'
import Person from "./components/Person"
import Form from "./components/Form"
import Filter from "./components/Filter"
import Heading from "./components/Heading"
import personService from "./services/persons"
import Notification from "./components/Notification"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"


function App() {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [added, setAdded] = useState("")
  const [deleted, setDeleted] = useState("")

  useEffect(() =>{
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  function addName(e) {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    }
     setNewName("")
     setNewNumber("")
   
     personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setAdded(`${newName} added to phonebook`)
        setTimeout(() => {
          setAdded(null)
        }, 5000);
      })

        const sameName = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const updateNum = {...personObject, number: newNumber}
    
        if(sameName){
          window.confirm(`${newName} already exists, replace old number with the new?`)
        //e.target.reset()
         // return
        personService
          .update(sameName.id, updateNum)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === sameName.id ? returnedPerson : person))
          })
          .catch(error => {
            setErrorMessage(`${sameName.name} already deleted from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000);
            setPersons(persons.filter(person => person.id !== sameName.id))
          })
        }
    }
    
  function handleNewName(e){
      setNewName(e.target.value)
  }
  
  function handleNewNumber(e){
    setNewNumber(e.target.value)
  }
  
  function filterContacts(e){
    setFilter(e.target.value);
    
    const input = e.target.value.toLowerCase();
    const filteredContacts = persons.filter(person => person.name && person.name.toLowerCase().includes(input));
      setPersons(filteredContacts)
  }
  
  function deleteContact(name, id){
    const toDelete = persons.filter(person => person.name && person.name === name)
    const nameToDelete =toDelete[0].name

    const withoutThisName = persons.filter(person => person.name && person.name !== name)
    
    const confirmDelete = `Delete ${nameToDelete} ?`
    
    const idToDelete = persons.filter(person => person.id && person.id === id)
    const deleteId = idToDelete[0].id
     personService
      .toDelete(deleteId)
      .then(() =>{
        setPersons(persons.filter(person => person.id !== id))
        setDeleted(`You have successfully deleted ${nameToDelete} from your phonebook `)
            setTimeout(() => {
              setDeleted(null)
            }, 5000);
      })
      .catch(error => {
        setErrorMessage(`${nameToDelete} already deleted from server`)
          setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      })
        window.confirm(confirmDelete) 
        setPersons(withoutThisName)
  }
  
  function refreshPage(){
    window.location.reload(); 
    setPersons(persons)
  }

  return (
    <>
    <Notification 
      ifAdded={added}
    />
    <br />
    <NotFound 
    ifDeleted={deleted}
     message={errorMessage}
    />
    <Heading info="Phonebook" />
    <Filter 
       filter={filter} filterContacts={filterContacts}
       handleClick={refreshPage}
       />
      
    <Heading info="Add Your Contact" />
    <Form  
        onSubmit={addName}
        name={newName} addName={handleNewName} 
        number={newNumber} addNumber={handleNewNumber} 
     />
        
    <Heading info="Contacts" />
      {persons.map((person, i) =>
    <Person key={i}  person={person} handleClick={() => deleteContact(person.name, person.id)}/>
      )}
    <Footer />
    </>
   )
}

export default App
