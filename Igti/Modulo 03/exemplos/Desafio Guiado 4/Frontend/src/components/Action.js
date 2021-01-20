import React from 'react'

export default function Action({id, type, onActionClick}) {
  const handleActionClick = () => {
    onActionClick(id, type);
  };

  return (
      <span className="material-icons" 
            style={{cursor: "pointer"}}
            onClick={handleActionClick}
      >{type}
      </span>
  )
}
