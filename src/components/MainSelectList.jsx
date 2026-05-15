import { useEffect, useState } from "react";

export default function MainSelectList({ productsList }) {

  const [categoryList, setCategoryList] = useState([]);
  const [products, setProducts] = useState([]);

  function createList(obj) {
    const list = [];
    obj.map(o => {
      if (!list.includes(o.category)) { list.push(o.category) }
    })
    setCategoryList(list)
  }

  useEffect(() => {
    if (products.length === 0) { setProducts(productsList) }
    createList(productsList)
  }, [productsList])

  return (
    <>
      <label htmlFor="inputState" className="form-label">Genere</label>
      <select name="inputState" className="form-select" defaultValue={null}>
        <option value={null}>null</option>
        {
          categoryList.map((category, index) => <option key={index} value={category}>{category}</option>)
        }
      </select>
    </>
  )
}