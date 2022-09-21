import React from 'react'

const InpuField = ({label, name, type, onChange}) => {
  return (
    <div className="mb-3">
        <label htmlFor="projectName" className="form-label">{label}</label>
        <input 
            id={name}
            name={name}
            type={type}
            onChange={onChange}
            className="form-control" 
            aria-describedby="helpText" 
        />
        <div id="helpText" className="text-danger">
            
        </div>
    </div>
  )
}

export default InpuField
