import type {NextPage} from 'next'
import ProductCard from "../components/ProductCard";
import {Product} from "../models/product";
import {v4 as uuidv4} from 'uuid';
import Page from "./page";

const products: Product[] = [
  {
    id: uuidv4(),
    heading: "Adventurer",
    price: 12.5,
    description: "A beautiful mug for your adventure travels",
    image: "/mug-on-the-go.jpeg"
  },
  {
    id: uuidv4(),
    heading: "Tea lover",
    price: 13.5,
    description: "Tea tastes better with your own design",
    image: "/mug-dackel.png"
  }
]

const Home: NextPage = () => {
  return (
    <Page>
      {products.map(product =>
        (<ProductCard product={product} key={product.id}/>)
      )}
    </Page>
  )
}

export default Home
