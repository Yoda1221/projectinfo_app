import { Link } from 'react-router-dom'
import noImage from '../assets/nothumb370x300.png'
import { Button, Card, ListGroup } from 'react-bootstrap/'

const ProjectCard = () => {
  return (
    <div className='grid'>
        <Card >
            <Card.Img variant="top" src={noImage} alt="Project image" />
            <Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>Project Name</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Text>Cras justo odio</Card.Text>
                    <Card.Text>Dapibus ac facilisis in</Card.Text>
                    <Card.Text>Vestibulum at eros</Card.Text>
                    <Card.Link href="/">Edit Project</Card.Link>
                    <Card.Link href="/">Go to project</Card.Link>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>

        <Card 
          text="light"
          variant="dark"
          bg="secondary"
        >
            <Card.Body>
                <Card.Title className='text-center'>Add New Project</Card.Title>
                <Card.Text>
                Click the "To create a new project" button, if you want to create a new project
                </Card.Text>
            </Card.Body>
            <Card.Img variant="" src={noImage} alt="Project image" />
            <Card.Body>
                <Link to="/new" >
                    <Button className='btn-sm w-100' variant="info">To create a new project</Button>{' '}
                </Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ProjectCard
