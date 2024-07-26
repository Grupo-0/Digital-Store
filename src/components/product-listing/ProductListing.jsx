import ProductCard from '../product-card/ProductCard.jsx';
import ProductItens from '../../database/ProductItens.js'

const ProductListing = ({quantidade}) => {
  const limites = ProductItens.slice(0, quantidade);

  const cards = limites.map((item,i) => (
    <ProductCard key={i} produtos={item} />
  ));

  return (
  <div className="max-w-[1440px] h-[800px] w-full pb-5 relative group"><div className='flex flex-wrap gap-8 justify-center'>{cards}</div></div>);
};

export default ProductListing;


