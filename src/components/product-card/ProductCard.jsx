import { Link } from "react-router-dom";


const ProductCard = ({ produtos }) => {
  let css = '';
  let discount = '';

  if (produtos.price > produtos.priceDiscount) {
    css = 'line-through text-light-gray';
    discount = '$' + produtos.priceDiscount;
  }

  return (
    <Link to={`/product-view/${produtos.id}`}>
      <div>
        <img className='h-80 w-72' src={produtos.image} alt='' />
        <div>
          <h1 className='text-2xl text-dark-gray-3'>{produtos.name}</h1>
          <h3 className='text-sm text-dark-gray-3'>{produtos.tipo}</h3>
          <div className='flex gap-4'>
            <span className={'text-2xl text-dark-gray  ' + css}>
              ${produtos.price}
            </span>
            <span className='text-2xl text-dark-gray'>{discount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

