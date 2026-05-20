import { useState, useEffect } from "react";
import { useParams } from "react-router"

export default function ProductDetail() {

  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({})


  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${id}`
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setProductDetail(data)
      })
  }, [id])

  return (
    <>
      <div className="container">
        <section>
          <h3>{productDetail.title}</h3>
          <p>{productDetail.description}</p>
        </section>
        <section>
          <img src={productDetail.image} alt="" />
        </section>
        <div className="row text-center">
          <div className="col">
            <span>Price : {productDetail.price}&euro;</span>
          </div>
          <div className="col-6">
            <span>Title</span>
          </div>
          <div className="col">
            <span>More</span>
          </div>
        </div>
      </div>
    </>
  )
}