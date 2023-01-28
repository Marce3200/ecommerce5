import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import "../Profile/profile.css"
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'




const Profile = () => {
 return (
   <Container>
<Row>
   <center>


  
<Col>
<p className="titulo-seccion">
   Mi Perfil
</p>
</Col>


<Row className='align-items-center'>
   <Col lg={6} className='d-flex flex-column'>
  <p className='datos-profile'>
   Nombre:
  </p>
   </Col>


   <Col lg={6} className='d-flex flex-column texto-datos'>
   <p> Antonia Argandoña</p>
   </Col>
</Row>


<Row className='align-items-center'>
   <Col lg={6} className='d-flex flex-column'>
  <p className='datos-profile texto-datos'>
   Mail:
  </p>
   </Col>


   <Col lg={6} className='d-flex flex-column texto-datos'>
   <p> mantito@gmail.com</p>
   </Col>
</Row>


<Row className='align-items-center'>


<Col lg={6} className='d-flex flex-column'>
  <p className='datos-profile'>
   Username:
  </p>
   </Col>


   <Col lg={6} className='d-flex flex-column texto-datos'>
   <p> Antoniaarga</p>
   </Col>
</Row>


<Row className='align-items-center'>
   <Col lg={6} className='d-flex flex-column'>
  <p className='datos-profile'>
   Contraseña:
  </p>
   </Col>


   <Col lg={6} className='d-flex flex-column texto-datos'>
   <p> ******</p>
   </Col>
</Row>


</center>
</Row>




   </Container>
 )
}


export default Profile
