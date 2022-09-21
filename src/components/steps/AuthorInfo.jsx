import React from 'react'

const AuthorInfo = ({ handleChange, formDatas }) => {
  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author name</label>
        <input 
          id="author" 
          name="author" 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          defaultValue={ formDatas.author}
          placeholder="e.g. John Doe" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="aEmail" className="form-label">Author email</label>
        <input 
          id="aEmail" 
          name="aEmail" 
          type="email" 
          className="form-control" 
          onChange={handleChange}
          defaultValue={ formDatas.aEmail}
          placeholder="e.g. info@example.project" 
        />
      </div>
    </div>
  )
}

export default AuthorInfo
