import { useState } from 'react'
import { AuthorInfo, ProjectInfo, OwnerInfo } from '../components'

const initialState = {
  pName: '',
  pDesc: '',
  author: '',
  aEmail: '',
  owner: '',
  oEmail: ''
}

const NewProject = () => {
  const [page, setPage]           = useState(0)
  const [formDatas, setFormDatas] = useState(initialState)

  const formTitles = Object.freeze({
    name:   "Name form",
    author: "Author form",
    owner:  "Owner form"
  })

  const handleChange = (e) => {
    setFormDatas((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async () => {
      console.log('FORMDATAS ', formDatas)

  }
  const pageDisplay = () => {
    if (page === 0) {
      return <ProjectInfo handleChange={handleChange} formDatas={formDatas} />;
    } else if (page === 1) {
      return <AuthorInfo handleChange={handleChange} formDatas={formDatas} />;
    } else {
      return <OwnerInfo handleChange={handleChange} formDatas={formDatas} />;
    }
  }

  return (
    <div className='container mt-5'>
      <div className="progressbar">
        <div
          style={{ 
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" 
          }}
        ></div>
        <div className="row">
          <div className="col-md-12">
          <h1>{formTitles.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {pageDisplay()}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }} className='btn btn-sm btn-warning px-3'
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === Object.keys(formTitles).length - 1) {
                handleSubmit()
              } else {
                setPage((currPage) => currPage + 1);
              }
            }} 
            className='btn btn-sm btn-info px-3'
          >
            {page === Object.keys(formTitles).length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewProject
