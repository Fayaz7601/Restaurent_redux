import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Image, Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Reviews from './Reviews';



function View() {

  const params = useParams()
  // console.log(params.id);


  const [allrestaurent, setallrestaurent] = useState([])

  // function to api call for datas inside json
  const getrestaurentdata = async () => {
    await fetch('/restaurants.json').then(data => {
      data.json()
        .then(result => {
          // console.log(result);
          setallrestaurent(result.restaurants)
        })
    })
  }

  // console.log(allrestaurent);

  const restdata = allrestaurent.find(item => item.id == params.id)
  // console.log(restdata);

  useEffect(() => {
    getrestaurentdata()
  }, [])




  return (
    <>
      {restdata ? (

        <Row>
          <Col>
            <Image className='p-5' src={restdata.photograph} fluid />
          </Col>
          <Col className='mt-5'>
            <h1>{restdata.name}</h1>
            <h2>{restdata.neighborhood}</h2>
            <h2>Cuisine:{restdata.cuisine_type}</h2>
            <h2>{restdata.address}</h2>
            <Operatingtime timedata={restdata.operating_hours}></Operatingtime><br></br>
            <Reviews reviewdata={restdata.reviews}></Reviews>




          </Col>
        </Row>

      ) : 'null'}
    </>
  )

}



export default View
