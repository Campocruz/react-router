import MainSelectList from "./MainSelectList"
import FormInputText from "./FormInputText"

export default function MainFilterBox({onSetRenderList, productsList }) {

  function selectedGenre(e) {
    onSetSelectGenre(e.target.value)
  }

  function findTitle(inputTitle) {
    if (inputTitle === "") {
      onSetRenderList(productsList)
    } else {
      const filteredTitle = productsList.filter((product) => product.title.toLowerCase().includes(inputTitle.toLowerCase()))
      onSetRenderList(filteredTitle)
    }
  }

  return (
    <>
      <div className="row d-flex justify-content-center m-4">
        <div className="col-md-2">
          <MainSelectList productsList={productsList} />
        </div>
        <div className="col-md-2">
          <FormInputText onFindTitle={findTitle} />
        </div>
      </div>
    </>
  )
}