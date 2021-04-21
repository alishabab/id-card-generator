import { IdCard } from './IdCard'
export const IdCards = ({cards}) => {
  return (
          <div className="cards">
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
                date={user.date}
                />
                )}
            </div>
  )
}