import CardMovie from './CardMovie'
import NotFound from './NotFound'
import Pag from './Pagination';
import React from 'react'
import { Row } from 'react-bootstrap'

const MoviesList = ({movies , GetPage , pagecount}) => {
    return (
        <Row>
            {
                movies.length >= 1 ?(movies.map((mov)=>{
                    return ( <CardMovie key={movies.id} mov={mov}/> )
                })): <NotFound/>
            }

            {
                movies.length >= 1 ?(<Pag GetPage={GetPage} pagecount={pagecount}/>) : null
            }
            
            

            
        </Row>
    )
}

export default MoviesList
