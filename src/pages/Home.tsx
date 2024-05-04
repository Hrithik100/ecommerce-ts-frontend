import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const addToCartHandler = ()=>{

  }

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard productId="asdff" name="macbook" price={100} stock={2} photo="https://m.media-amazon.com/images/I/31ilq3hPhEL._SY445_SX342_QL70_FMwebp_.jpg" handler={addToCartHandler}/>
      </main>
    </div>
  );
};

export default Home;
