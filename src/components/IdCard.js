import '../App.css';
import avatar from './avatar.png';

export const IdCard = ({name, fatherName, age, gender, addressLine1, addressLine2, designation, uploadedImage, date}) => {
  return (

  <div className="container">
    <div className="logo-container">
      <h3 className="logo">Zeba Saifi Hospital</h3>
      <p className="logo-address">Pakwara Road, Said Nagli</p>
    </div>
    <div className="avatar">
      <img src={uploadedImage || avatar} alt="avatar" className="image"/>
    </div>
    <div className="user-info">
      <div className="user-info-line">
        <span className="user-heading">Name: </span><span className="user-details">{name || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-heading">Age/Gender: </span><span className="user-details">{age || ''}/{gender || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-heading">Father's Name: </span><span className="user-details">{fatherName || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-heading">Address: </span><span className="user-details">{addressLine1 || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-details">{addressLine2 || ''}</span>
      </div>
    </div>
    <div>
      <h5 className="designation">{designation || 'Designation'}</h5>
    </div>
    <p className="sign">Signature Authority</p>
    <p className="issue">Date of issued</p>
    <p className="date">{date || ''}</p>
  </div>
  )
}