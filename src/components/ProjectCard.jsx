import { MdDeleteOutline }  from 'react-icons/md'
import { Button, Card }     from 'react-bootstrap/'
import { deleteProjects }   from "../api/projectsApi"
import { useMutation, useQueryClient } from "react-query"

const ProjectCard = ({projects}) => {
    const queryClient = useQueryClient()

    const deleteProjectsMutation = useMutation(deleteProjects, {
        onSuccess: () => {
            //* Invalidates cache and refetch 
            queryClient.invalidateQueries("projects")
        }
    })

    return (
        projects && projects.map(project => (
            <Card key={project.pName}>
                {/* <Card.Img variant="top" src={noImage} alt="Project image" /> */}
                {/* <Card.ImgOverlay> */}
                    <Card.Body>
                        <Card.Title className='d-flex justfy-content-between'>
                            {project.pName}
                            <Button
                                className='btn btn-sm'
                                variant='outline-info'
                                id={project.id}
                                onClick={() => deleteProjectsMutation.mutate({ id: project.id })}
                            >
                                <MdDeleteOutline/>
                            </Button>
                        </Card.Title>
                        <Card.Text>{project.pDesc}</Card.Text>
                        <Card.Text>{project.author}</Card.Text>
                        <Card.Text>{project.owner}</Card.Text>
                        <Card.Link href="/">{project.aEmail}</Card.Link>
                        <Card.Link href="/">{project.oEmail}</Card.Link>
                    </Card.Body>
                {/* </Card.ImgOverlay> */}
            </Card>
        ))
    )
}

export default ProjectCard
