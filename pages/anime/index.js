import Navbar from '@/components/Navbar'
import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import apiAnime from '../../services/apiAnime'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { BsFilm, IconName } from "react-icons/bs";

const index = (props) => {
    const animes = props.animes
  return (
    <Navbar titulo='Animes'>
        <Row>
    <Col md={12}>
    <Table striped bordered hover variant="secondary">
                    <thead>
                        <tr>
                            <th>Detalhes</th>
                            <th>Título</th>
                            <th>Duração</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animes.map(item => (
                        <tr>
                              <td><Link href={"/anime/" + item.mal_id}> <Button variant="dark"><BsFilm/></Button></Link></td>
                            <td>{item.title}</td>
                            <td>{item.duration}</td>
                            <td>{item.year}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
    </Col>
    </Row>
    </Navbar>
  )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnime.get("/anime")
    const animes = resultado.data.data
    return {
        props: {
          animes
        }, 
    }
  }