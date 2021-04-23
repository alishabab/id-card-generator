import React from 'react';
import { IdCard } from './IdCard'
export const IdCards = React.forwardRef(({cards, handleEdit, handleDelete}, ref) => (
          <div className="cards" ref={ref}>
          {
            cards.map(user => 
            <IdCard 
              key={user.id}
              user={user} 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
               />
                )}
            </div>
  ))