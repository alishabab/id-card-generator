import {useState, createRef } from 'react';
import Pdf from "react-to-pdf";
import { IdCards } from './IdCards';

export const JoinForm = () => {
  const [cards, setCards] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    fatherName: '',
    age: '',
    gender: 'M',
    addressLine1: '',
    addressLine2: '',
    designation: '',
    uploadedImage: '',
    date: '',
  })

  const ref = createRef();

  const handleClick = (e) => {
    e.preventDefault();
    setCards([...cards, userDetails])
    setUserDetails({
      name: '',
      fatherName: '',
      age: '',
      gender: 'M',
      addressLine1: '',
      addressLine2: '',
      designation: '',
      uploadedImage: '',
      date: '',
    })
  }


  console.log(cards)
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
        <button onClick={handleClick}> Save </button>
      </div>
      {cards.length > 0 && <Pdf targetRef={ref} filename="cards.pdf" scale={1}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>}
      <div ref={ref}>
        {cards.length > 0 && <IdCards cards={cards} />}
      </div>
    </>
  )
}

