import MainSelectList from "./MainSelectList"
import FormInputText from "./FormInputText"

export default function MainFilterBox({ onSetRenderList, products }) {

  function selectedGenre(e) {
    onSetSelectGenre(e.target.value)
  }

  function findTitle(inputTitle) {
    if (inputTitle === "" || inputTitle === "All") {
      onSetRenderList(products)
    } else {
      const filteredTitle = products.filter((product) => product.category.toLowerCase().includes(inputTitle.toLowerCase()) || product.title.toLowerCase().includes(inputTitle.toLowerCase()))
      onSetRenderList(filteredTitle)
    }
  }

  return (
    <>
      <div className="row d-flex justify-content-center m-4">
        <div className="col-md-2 text-center">
          <MainSelectList productsList={products} onFindTitle={findTitle} />
        </div>
        <div className="col-md-2 text-center">
          <FormInputText onFindTitle={findTitle} />
        </div>
      </div>
    </>
  )
}