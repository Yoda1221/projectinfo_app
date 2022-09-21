import React from 'react'

const OwnerInfo = ({ handleChange, formDatas }) => {
  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label htmlFor="owner" className="form-label">Owner name</label>
        <input 
          id="owner" 
          name="owner" 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          defaultValue={ formDatas.owner}
          placeholder="Example project" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="oEmail" className="form-label">Owner name</label>
        <input 
          id="oEmail" 
          name="oEmail" 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          defaultValue={ formDatas.oEmail}
          placeholder="Example project" 
        />
      </div>

    </div>
  )
}

export default OwnerInfo
