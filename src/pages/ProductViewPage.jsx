import Layout from "../components/Layout";
import BuyBox from "../components/BuyBox/BuyBox";
import ProductListing from "../components/product-listing/ProductListing";



const ProductViewPage = () => {
  return (
    <Layout>
        <BuyBox />
        <div className="mt-12">
          <h2 className="ml-8 mb-8 font-bold text-2xl text-dark-gray-2">Produtos relacionados</h2>
          <ProductListing quantidade={4} />
        </div>
        
    </Layout>
  )
}

export default ProductViewPage