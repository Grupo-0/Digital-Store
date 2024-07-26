import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import ProductListing from '../components/product-listing/ProductListing';
import ProductCards from '../components/Collection';
import Section from '../components/Section';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <Layout>
      <Gallery
        slides={[
          '/public/home-slide-1.jpeg',
          '/public/home-slide-2.jpeg',
          '/public/home-slide-3.jpeg',
          '/public/home-slide-4.jpeg',
          '/public/home-slide-5.jpeg',
          '/public/home-slide-6.jpeg',
          '/public/home-slide-7.jpeg',
          '/public/home-slide-8.jpeg',
        ]}
      />
      <Section title="Coleções em Destaque">
        <ProductCards />
      </Section>
      <Section title="Produtos em alta" options={<Link to='/product-listing'>Ver mais</Link>}>
        <ProductListing quantidade={8} />  
      </Section>
    </Layout>
  );
};

export default HomePage;
