export default function ProductDetail({ detail }) {

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <h3>{detail.title}</h3>
          </div>
          <div className="col-6 mt-5">
            <img src={detail.image} alt="" />
          </div>
          <div className="col-6 mt-5">
            <ul className="list-unstyled">
              <li><strong>Categoria: </strong>{detail.category}</li>
              <li><strong>Rate: </strong>{detail.rating.rate} & <strong>Count: </strong>{detail.rating.count}</li>
              <li><strong>Prezzo: </strong>{detail.price}&euro;</li>
            </ul>
          </div>
          <div className="col-8 mt-4">
            <h4>Descrizione</h4>
            <p>{detail.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}