import { useState } from 'react';
import '../App.css';
import avatar from './avatar.png';

export const IdCard = () => {
  const [uploadedImage, setUploadedImage] = useState('');
  return (
    <div>
  <div className="container">
    <div className="logo-container">
      <h3 className="logo">Zeba Saifi Hospital</h3>
      <p className="logo-address">Pakwara Road, Said Nagli</p>
    </div>
    <div className="avatar">
      <img src={uploadedImage || avatar} alt="avatar" className="image"/>
    </div>
    <div className="user-info">
      <div>
        <span className="user-heading">Name: </span><span className="user-details">Shabab</span>
      </div>
      <span className="user-heading">Father's Name: </span><span className="user-details">Shabab</span>
    </div>
  </div>
  <input type="file" onChange={(e) => setUploadedImage(URL.createObjectURL(e.target.files[0]))} />
  </div>
  )
}