import { Link } from "react-router-dom";

const ProductCard = ({ produtos }) => {
  let css = '';
  let discount = '';

  if (produtos.price > produtos.priceDiscount) {
    css = 'line-through text-light-gray';
    discount = '$' + produtos.priceDiscount;
  }

  return (
    <Link to="/product-view">
    <div>
      <img className='h-80 w-72' src={produtos.image} alt='' />
      <div>
        <h1 className='text-2xl text-dark-gray-3'>{produtos.name}</h1>
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

// --- Refaroração de @rafaelcesar0 ---
// const ProductCard = ({ name, image, price, priceDiscount }) => {
//   const hasDiscount = price > priceDiscount;
//   const priceClass = hasDiscount ? 'line-through text-light-gray' : '';
//   const formattedDiscountPrice = hasDiscount ? `$${priceDiscount}` : '';

//   return (
//     <div className="p-4 border rounded-md shadow-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
//       <img className="h-48 w-full object-cover rounded-md" src={image} alt={name} />
//       <div className="mt-4">
//         <h1 className="text-xl text-dark-gray-3 mb-2">{name}</h1>
//         <div className="flex gap-4 items-center">
//           <span className={`text-xl text-dark-gray ${priceClass}`}>${price}</span>
//           {hasDiscount && (
//             <span className="text-xl text-dark-gray font-semibold">{formattedDiscountPrice}</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
