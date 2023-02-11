import React from 'react'
import { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../action/restaurentAction';
import { useDispatch, useSelector } from 'react-redux';


function Restaurantlist() {

  const [allrestaurent, setallrestaurent] = useState([])

  const dispatch = useDispatch()
  const result=useSelector(state=>state.restaurentReducer)
  const{restaurantList}=result

  useEffect(() => {

    dispatch(RestaurantListAction())
    // getrestaurentdata()
  }, [])
  // [] is given to avoid rerunning of restaurentdata(continously) we only to load the one time when we ope the page


  return (
    <Row>
      {

        restaurantList.map(item => (
          <RestCard data={item} />
        ))

      }


    </Row>
  )
}

export default Restaurantlist
