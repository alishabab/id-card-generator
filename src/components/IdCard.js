import '../App.css';
import avatar from './avatar.png';

export const IdCard = ({ user, handleEdit, handleDelete }) => {
  
  return (

  <div className="container">
    <div className="logo-container">
      <h3 className="logo">Zeba Saifi Hospital</h3>
      <p className="logo-address">Pakwara Road, Said Nagli</p>
    </div>
    <div className="avatar">
      <img src={user.uploadedImage || user.src || avatar} alt="avatar" className="image"/>
    </div>
    <div className="user-info">
      <div className="user-info-line">
        <span className="user-heading">Name: </span><span className="user-details">{user.name || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-heading">Age/Gender: </span><span className="user-details">{user.age || ''}/{user.gender || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-heading">Father's Name: </span><span className="user-details">{user.fatherName || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-heading">Address: </span><span className="user-details">{user.addressLine1 || ''}</span>
      </div>
      <div className="user-info-line">
        <span className="user-details">{user.addressLine2 || ''}</span>
      </div>
    </div>
    <div>
      <h5 className="designation">{user.designation || 'Designation'}</h5>
    </div>
    <p className="sign">Signature Authority</p>
    <p className="issue">Date of issued</p>
    <p className="date">{user.date || ''}</p>

    <button className="d-none editBtn" onClick={(e) => handleEdit(e, user)}>Edit</button>
    <button className="d-none editBtn" onClick={(e) => handleDelete(e, user.id)}>Delete</button>
  </div>
  )
}