import React from 'react'

const ProjectInfo = ({ handleChange, formDatas }) => {
  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label htmlFor="pName" className="form-label">Project name</label>
        <input 
          id="pName" 
          name="pName" 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          defaultValue={ formDatas.pName}
          placeholder="Example project" 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pDesc" className="form-label">Project description</label>
        <textarea 
          id="pDesc" 
          name="pDesc" 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          defaultValue={ formDatas.pDesc}
          placeholder="Example project" 
          rows="3"
        >
        </textarea>
      </div>
    </div>
  )
}

export default ProjectInfo
