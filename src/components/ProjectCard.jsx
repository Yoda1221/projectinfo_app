import { Link } from 'react-router-dom'
import noImage from '../assets/nothumb370x300.png'
import { Button, Card, ListGroup } from 'react-bootstrap/'

const ProjectCard = ({projects}) => {
    return (
        projects && projects.map(project => (
            <Card key={project.pName}>
                <Card.Img variant="top" src={noImage} alt="Project image" />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>{project.pName}</Card.Title>
                        <Card.Text>{project.pDesc}</Card.Text>
                        <Card.Text>{project.author}</Card.Text>
                        <Card.Text>{project.owner}</Card.Text>
                        <Card.Link href="/">{project.aEmail}</Card.Link>
                        <Card.Link href="/">{project.oEmail}</Card.Link>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        ))
    )
}

export default ProjectCard
