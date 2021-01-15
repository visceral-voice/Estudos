import React from 'react'

export default function Toogle(props) {
  
  const handleChange = (event) => {
    const {onToogle} = props;
    const isChecked = event.target.checked;
    onToogle(isChecked);
  };

  const {enabled, description} = props;
  return (
    <div className="switch">
            <label>
              {description}
              <input type="checkbox" 
                      checked={enabled} 
                      onChange={handleChange} 
              />
              <span className="lever"></span>
            </label> 
    </div>
  );
}
