export default function ProductCard({ product }) {

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5><a href="">{product.title}</a></h5>
        </div>
        <div className="card-body">
          <section className="product-img">
            <img src={product.image} alt="" className="card-img-top rounded mx-auto d-block" />
          </section>
          <section className="description">
            <h5>Description</h5>
            <p>{product.description}</p>
          </section>
          <section className="product-detail">
            <ul className="list-unstyled">
              <li><strong>Categoria :</strong>{product.category}</li>
              <li><strong>Rate: </strong>{product.rating.rate} & <strong>Count: </strong>{product.rating.count}</li>
              <li><strong>Prezzo: </strong>{product.price}&euro;</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}