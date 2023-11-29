const ProductComponent = (obj) => (
  <dl>
    <dt>Name</dt>
    <dd>{obj.Name}</dd>
    <dt>Price</dt>
    <dd>{obj.Price}</dd>
  </dl>
)
ReactDOM.render(
  <>
    <ProductComponent Name={'Nike Casuals'} Price={5999.99} />
  </>,
  document.getElementById("container")
)