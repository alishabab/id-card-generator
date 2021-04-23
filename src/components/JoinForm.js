import { useEffect } from 'react';
import {useState, useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
import { v4 as uuidv4 } from 'uuid';
import Pdf from "react-to-pdf";
import { IdCards } from './IdCards';

export const JoinForm = () => {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('cards')) || []);
  const [userDetails, setUserDetails] = useState({
    id: '',
    name: '',
    fatherName: '',
    age: '',
    gender: 'M',
    addressLine1: '',
    addressLine2: '',
    designation: '',
    uploadedImage: '',
    src: '',
    date: '',
  })

  const componentRef = useRef();

  
  const handleClick = (e) => {
    e.preventDefault();
    const index = cards.findIndex(user => user.id === userDetails.id);
    console.log(index)
    if (index>=0) {
      cards[index] = userDetails;
    } else {
      userDetails.id = uuidv4();
      setCards([...cards, userDetails])
    }

    setUserDetails({
      id: '',
      name: '',
      fatherName: '',
      age: '',
      gender: 'M',
      addressLine1: '',
      addressLine2: '',
      designation: '',
      uploadedImage: '',
      src: '',
      date: '',
    })
  }

  useEffect(() => {
    localStorage.setItem('cards',JSON.stringify(cards))
  },[cards])

  const handleReset = (e) => {
    e.preventDefault();
    setCards([])
    localStorage.clear();
  }

const handleEdit = (e, user) => {
  e.preventDefault();
  setUserDetails(user);
}

const handleDelete = (e, id) => {
  const newCards = cards.filter(user => user.id !== id);
  setCards(newCards);
}

  return (
    <>
      <div className="form">
        <label htmlFor="name">
          Name:
          <input type="text" value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="fatherName">
          Father's Name:
          <input type="text" value={userDetails.fatherName} onChange={(e) => setUserDetails({...userDetails, fatherName: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="age">
          Age:
          <input type="text" value={userDetails.age} onChange={(e) => setUserDetails({...userDetails, age: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="gender">
          Gender:
          <select value={userDetails.gender} onChange={(e) => setUserDetails({...userDetails, gender: e.target.value})}>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </label>
        <br />
        <label htmlFor="designation">
          Designation:
          <input type="text" value={userDetails.designation} onChange={(e) => setUserDetails({...userDetails, designation: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="addressLine1">
        Address Line 1:
          <input type="text" value={userDetails.addressLine1} onChange={(e) => setUserDetails({...userDetails, addressLine1: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="addressLine2">
        Address Line 2:
          <input type="text" value={userDetails.addressLine2} onChange={(e) => setUserDetails({...userDetails, addressLine2: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="date">
        Date of Issued:
          <input type="date" value={userDetails.date} onChange={(e) => setUserDetails({...userDetails, date: e.target.value})}/>
        </label>
        <br />
        <label htmlFor="uploadedImage">
        Upload Image:
          <input type="file"  onChange={(e) => setUserDetails({...userDetails, uploadedImage: URL.createObjectURL(e.target.files[0])})}/>
        </label>
        <br />
        <label htmlFor="uploadedImage">
        Or Image url:
          <input type="text" value={userDetails.src} onChange={(e) => setUserDetails({...userDetails, src: e.target.value})}/>
        </label>
        <br />
        <button onClick={handleClick}> Save </button>
        <button onClick={handleReset}> Reset </button>
      </div>
      {cards.length > 0 && <Pdf targetRef={componentRef} filename="component.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Export As PDF</button>}
      </Pdf>}
    
      {
      cards.length > 0 && 
      <>
        <button onClick={() => exportComponentAsJPEG(componentRef)}>
          Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPNG(componentRef)}>
          Export As PNG
        </button>
      </>
      }
      <IdCards ref={componentRef} 
              cards={cards} 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setCards={setCards}/>
      
    </>
  )
}

