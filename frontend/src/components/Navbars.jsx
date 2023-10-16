
import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto"></Nav> {/* Create an empty Nav element to push the following links to the right */}
          <Nav>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/rigester'>Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;



// import React from 'react'
// import {Navbar,Nav,Container} from "react-bootstrap"
// import { Link } from 'react-router-dom'

// const Navbars = () => {
//   return (
//     <div>
//         <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
//             <Nav.Link ><Link to='/rigester'>Sing up</Link></Nav.Link>
            
//           </Nav>
//         </Container>
//       </Navbar>
      
//     </div>
//   )
// }

// export default Navbars
