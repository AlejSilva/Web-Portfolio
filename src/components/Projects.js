import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import interiorDesignImg from "../assets/images/interiordesign.jpg";
import landingPageImg from "../assets/images/LandingPage.jpg";
import pygameImg from "../assets/images/pygame.jpg";
import shellImg from "../assets/images/shell.jpg";
import userAuthImg from "../assets/images/userAuth.jpg";
import blackImg from "../assets/images/black.jpg";
import startggImg from "../assets/images/startgg.jpg";
import portfolioImg from "../assets/images/portfolioImg.jpg";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Landing Page",
      description: "In this project, I used Javascript, HTML and CSS to design a landing page template that could be used for a wide range of companies. In this project, I used my CSS skills to do most of the design elements of the landing page. Originally, I coded the styling in SCSS, which I then converted to CSS using the node-sass package from Node.js",
      imageUrl: landingPageImg,
      link: "https://alejsilva.github.io/HTML-SCSS-Landing-Page/"
    },
    {
      title: "Interior Design App",
      description: "For my first React project, I worked with another developer, using React and Javascript to create and design an interior design app which allows you to take different objects commonly found in a house to visualize the layout of your ideal room. (Co-Developer Name: Ryan Gilmartin)",
      imageUrl: interiorDesignImg,
      link: "https://rgilmartin.github.io/InteriorDesignApp/"
    },
    {
      title: "My Portfolio",
      description: "This project is what you are seeing. This portfolio was made with Javascript and React. I made this portfolio from scratch, but I was refreshed on my React skills while making this. I have simple animations, a carousel to display my skills, and projects that are linked to my deployed projects on Github",
      imageUrl: portfolioImg,
    }
  ];
  const backendProj = [
    {
      title: "Simple Shell",
      description: "A powerful C-based Simple Shell, mirroring the functionality of familiar terminal and command line interfaces. This project showcases my low-level programming skills by providing users with a seamless command-line experience. With a minimalistic design, my Simple Shell effortlessly handles essential commands, making it an efficient tool for navigating and executing tasks within a terminal-like environment",
      imageUrl: shellImg,
      link: "https://github.com/AlejSilva/Simple-Shell"
    },
    {
      title: "Python Platformer",
      description: "In my Python Pygame Adventure project, I embarked on a thrilling journey of game development, wielding the power of Python and Pygame to bring to life an immersive and action-packed gaming experience. This project not only showcases my love for coding but also highlights my dedication to crafting engaging gameplay through intricate design elements",
      imageUrl: pygameImg,
      link: "https://alejsilva.itch.io/leap-of-legends"
    },
    {
      title: "User Authentication App",
      description: "I've created a User Authentication Project that ensures secure access control for applications. This project showcases my proficiency in web security and backend development, implementing robust authentication mechanisms and data protection techniques. It serves as a fundamental tool for building secure web apps, prioritizing user privacy and data integrity. With this project, I've established a solid foundation for user authentication, enhancing the trustworthiness of digital experiences",
      imageUrl: userAuthImg,
      link: "https://alejsilva.github.io/bootstrap-auth/"
    }
  ];
  const fullStackProj = [
    {
      title: "",
      description: "",
      imageUrl: blackImg
    },
    {
      title: "Online Tournment Organizer (Coming Soon)",
      description: "I am developing a dynamic online tournament organizer akin to start.gg using Firebase and JavaScript. This project streamlines the process of managing and participating in gaming competitions. It offers a user-friendly interface for creating, registering, and tracking tournaments, while Firebase's real-time database ensures instant updates and notifications. With my design and coding expertise, I crafted a seamless platform that enhances the esports experience, making it easier for players and organizers alike to engage in competitive gaming.",
      imageUrl: startggImg
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          backendProj.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          fullStackProj.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroundImgRight"></img>
    </section>
  )
}