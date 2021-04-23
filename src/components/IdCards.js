import React from 'react';
import { IdCard } from './IdCard'
export const IdCards = React.forwardRef(({cards}, ref) => (
          <div className="cards" ref={ref}>
          {
            cards.map(user => 
            <IdCard 
                key={user.name}
                name={user.name} 
                fatherName={user.fatherName} 
                age={user.age}
                gender={user.gender}
                designation={user.designation}
                addressLine1={user.addressLine1}
                addressLine2={user.addressLine2}
                uploadedImage={user.uploadedImage}
                src={user.src}
                date={user.date}
                />
                )}
            </div>
  ))