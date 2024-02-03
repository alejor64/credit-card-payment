import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../application/selectors/productsSelectors'
import './CatalogPage.scss'
import ProductCard from '../../components/ProductCard/ProductCard'

const CatalogPage = () => {
  const products = useSelector(selectProducts);

  return (
    <div>
      <h1>All products</h1>
      <div className='products-container'>
        {
          products.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default CatalogPage;