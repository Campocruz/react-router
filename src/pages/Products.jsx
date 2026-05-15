import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import MainFilterBox from "../components/MainFilterBox";

export default function Products({ titlePage, }) {

  const urlApi = "https://fakestoreapi.com/products"

  const [products, setProducts] = useState([]);
  const [renderList, setRenderList] = useState([]);

  function getProductsUrl(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setRenderList(data)
      })
  }

  function filteredProduct(inputValue) {
    const filter = renderList.filter(item => item.title.includes(inputValue))
  }

  useEffect(() => {
    getProductsUrl(urlApi)
  }, [])

  return (
    <>
      <div className="container mt-2 p-1">
        <section>
          <p>{titlePage} page</p>
        </section>
        <section>
          <MainFilterBox onSetRenderList={setRenderList} productsList={renderList} />
        </section>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
          {
            renderList?.map(item => (
              <div key={item.id} className="col">
                <ProductCard product={item} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}