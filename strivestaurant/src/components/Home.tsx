import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { useState } from 'react'
import DishComments from './DishComments'
import upperName from '../helpers/lib'
import Dish from "../typings/Dish"
interface FunctionalComponentProps {
  title: string
}

const Home = ({ title }: FunctionalComponentProps) => {
  const [selected, setSelected] = useState<Dish>({
    "id": 0,
    "name": "Carbonara",
    "image": "/assets/images/carbonara.jpg",
    "category": "mains",
    "label": "Fat",
    "price": "7.99",
    "description": "Pasta with Guanciale (a kind of bacon), Pecorino (sheep cheese), Pepper, Salt and Eggs.",
    "comments": [
      {
        "id": 0,
        "rating": 5,
        "comment": "Wow! One of the best pasta I ever had!",
        "author": "Tobia De Angelis",
        "date": "2020-10-16T17:57:28.556094Z"
      },
      {
        "id": 1,
        "rating": 5,
        "comment": "Awesome!",
        "author": "Diego Banovaz",
        "date": "2020-10-16T17:57:28.556094Z"
      }
    ]
  })

 
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {dishes.map((dish, i) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish)
                }}
              >
                <img className="d-block w-100" src={dish.image} alt={'slide number ' + (i + 1)} />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <DishComments selectedPasta={selected} />
      </Row>
    </Container>
  )
}

export default Home
