import Layout from "../components/Layout";
import Filter from "../components/Filter";
import FilterGroup from "../components/FilterGroup";
import Section from "../components/Section";
import ProductListing from "../components/product-listing/ProductListing";


const ProductListingPage = () => {
  return (
    <Layout>
      <div className="flex mt-12 ml-3 gap-5">
        <div className="flex flex-col w-1/4">
          <Filter />
          <FilterGroup/>
        </div>
        <Section>
          <ProductListing quantidade={15}/>
        </Section>
      </div>
    </Layout>
  )
}

export default ProductListingPage