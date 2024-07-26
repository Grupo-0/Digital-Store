import ProductCard from '../product-card/ProductCard.jsx';
import ProductItens from './ProductItens.js';

const ProductListing = ({quantidade}) => {
  const limites = ProductItens.slice(0, quantidade);

  const cards = limites.map((item) => (
    <ProductCard produtos={item} />
  ));

  return <div className='flex flex-wrap gap-4 justify-center'>{cards}</div>;
};

export default ProductListing;
