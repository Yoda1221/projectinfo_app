import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from "react-query"
import { AuthorInfo, ProjectInfo, OwnerInfo } from '../components'
import { addProjects } from "../api/projectsApi"
import { useNavigate }    from "react-router-dom"


const initialState = {
  id:0,
  pName: '',
  pDesc: '',
  author: '',
  aEmail: '',
  owner: '',
  oEmail: ''
}

const NewProject = () => {
  const navigate  = useNavigate()
  const queryClient = useQueryClient()
  const [pValue, setpValue]       = useState(1)
  const [page, setPage]           = useState(0)
  const [formDatas, setFormDatas] = useState(initialState)

  const formTitles = Object.freeze({
    0: "Project name form",
    1: "Author form",
    2: "Owner form"
  })

  const addProjectsMutation = useMutation(addProjects, {
    onSuccess: () => {
        // Invalidates cache and refetch 
        queryClient.invalidateQueries("projects")
    }
  })

  const handleChange = (e) => {
    setFormDatas((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async () => {
      console.log('FORMDATAS ', formDatas)
      addProjectsMutation.mutate(formDatas)
      setFormDatas(initialState)
      navigate('/') 
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
        <div className="row">
          <div className="col-md-12">
            <h1>{formTitles[page]}</h1>
          </div>
          <div className='col-md-12'>
            <div className="progress">
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated bg-info" 
                role="progressbar"
                style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {pageDisplay()}
          </div>
        </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1)
              setpValue(pValue - 1)
            }} className='btn btn-sm btn-warning px-3'
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === Object.keys(formTitles).length - 1) {
                handleSubmit()
              } else {
                setPage((currPage) => currPage + 1)
                setpValue(pValue + 1 * 100)
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
