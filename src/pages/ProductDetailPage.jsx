import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import ProductDetail from "../components/ProductDetail";

export default function ProductDetailPage() {

  const { id } = useParams();
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  const [productDetail, setProductDetail] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        setProductDetail(data)
      })
      .catch(err => (console.log(err)))
      .finally(() => setLoading(false))
  }, [id])


  if (loading) { return <LoadingPage /> }

  return <ProductDetail detail={productDetail} />

}