import axios from 'axios'

const projectApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getProjects = async () => {
    const response = await projectApi.get("/projects")
    return response.data
}
export const addProjects = async (project) => {
    return await projectApi.post("/projects", project)
}
export const updateProjects = async (project) => {
    return await projectApi.patch(`/projects/${project.id}`, project)
}
export const deleteProjects = async ({id}) => {
    return await projectApi.delete(`/projects/${id}`, id)
}

export default projectApi
