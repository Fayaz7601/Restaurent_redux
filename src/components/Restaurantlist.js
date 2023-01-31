import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restaurantlist() {

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

  console.log(allrestaurent);

  useEffect(() => {
    getrestaurentdata()
  }, [])
  // [] is given to avoid rerunning of restaurentdata(continously) we only to load the one time when we ope the page


  return (
    <Row>
      {

        allrestaurent.map(item => (
          <RestCard data={item} />
        ))

      }


    </Row>
  )
}

export default Restaurantlist
