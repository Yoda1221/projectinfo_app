import React from 'react'
import { ProjectCard } from '../components'
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getProjects, addProjects, updateProjects, deleteProjects } from "../api/projectsApi"

const Projects = () => {
  const queryClient = useQueryClient()
  const {
    isLoading,
    isError,
    error,
    data: projects
  } = useQuery('projects', getProjects, {
      select: data => data.sort((a, b) => b.id - a.id)
  })

  let content
  if (isLoading)    content = <p>Loading...</p>
  else if (isError) content = <p>{error.message}</p>
  else {
    content = <ProjectCard projects={projects} />
  }

  return (
    <div className="container mt-5 grid">
      {content}
    </div>
  )
}

export default Projects
