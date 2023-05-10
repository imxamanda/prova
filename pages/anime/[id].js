import Navbar from '@/components/Navbar'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import apiAnime from '../../services/apiAnime'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { BsZoomIn } from "react-icons/bs";
import { TbArrowBackUp } from "react-icons/Tb";

const index = (props) => {
  const detalhes = props.detalhes
  return (
    <Navbar titulo={detalhes.title}>
      
    <Container>
      <Row>
        <Col md={3}>
        <Card border="danger">
        <Card.Header className='bg-danger text-light'>Foto</Card.Header>
        <Card.Img src={detalhes.images.webp.image_url} />
        <Card.Body>
        <Link href={detalhes.images.webp.image_url} target="_blank"> <Button className='bg-dark'> Zoom  <BsZoomIn/></Button> </Link>
        </Card.Body>
        </Card>
        <br/>
        <Link href={"/anime/"}> <Button className='bg-danger'> Voltar <TbArrowBackUp/></Button> </Link>
        </Col>

        <Col md={6}>
          <Card border="secondary">
          <Card.Header className='bg-danger text-light'> {detalhes.title}</Card.Header>
          <Card.Body bg="light">
        <p> <strong> Episódios: </strong> {detalhes.episodes} </p>
        <p> <strong> Status: </strong> {detalhes.status} </p>
        <p> <strong> Ano: </strong> {detalhes.year} </p>
        <p> <strong> Duração: </strong> {detalhes.duration} </p>
        <p> <strong> Score: </strong> {detalhes.score} </p>
        <p> {detalhes.year != null ? detalhes.synopsis : ""} </p>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
   
    </Navbar>
  )
}

export default index

export async function getServerSideProps(context) {
    const id = context.params.id;
    const anime = await apiAnime.get('/anime/' + id)
    const detalhes = anime.data.data


    return {
      props:{
        detalhes
      },

    }
}