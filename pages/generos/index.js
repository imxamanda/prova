import React from 'react'
import Navbar from '@/components/Navbar'
import { Container } from 'react-bootstrap'
import apiAnime from '../../services/apiAnime'

const index = (props) => {
    const generos = props.generos
    return (
        <>
            <Navbar titulo="Gêneros">
                <Container>
                    <ul>
                        {generos.map(item => (
                            <li> {item.name} ({item.count}) </li>
                        ))}
                    </ul>
                </Container>
            </Navbar>
        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnime.get("/genres/anime")
    const generos = resultado.data.data

    return {
        props: {
            generos
        },
    }
}