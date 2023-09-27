import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, link}) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'white' }}>
                <div className="proj-imgbox">
                    <img src={ imageUrl } alt="projectImg" style={{ height: '250px', width: '425px' }}/>
                    <div className="proj=txtx">
                        <br></br>
                        <h4 style={{ textAlign: 'center' }}>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}