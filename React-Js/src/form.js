class FormDemo extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      product : {
        ProductId: '',
        Name: '',
        Price: ''
      }
    }
    this.UpdateForm = this.UpdateForm.bind(this);
  }
  UpdateForm(event){
    const name = event.target.Name;
    const value = event.target.value;
    this.setState({
      product: {
        ...this.state.product,
        [name]: value
      }
    })
  }
  render(){
    return (
      <div>
          <dl>
            <dt>Product Id</dt>
            <dd>
              <input type="text" onChange={this.UpdateForm} name="ProductId" value={this.state.product.ProductId} />
            </dd>
            <dt>Name</dt>
            <dd>
              <input type="text" onChange={this.UpdateForm} name="Name" value={this.state.product.Name} />
            </dd>
            <dt>Price</dt>
            <dd>
              <input type="text" onChange={this.UpdateForm} name="Price" value={this.state.product.Price} />
            </dd>
          </dl>
          <h3>Product Details</h3>
          <dl>
            <dt>Product Id</dt>
            <dd>{this.state.product.ProductId}</dd>
            <dt>Name</dt>
            <dd>{this.state.product.Name}</dd>
            <dt>Price</dt>
            <dd>{this.state.product.Price}</dd>
          </dl>
      </div>
    )
  }
}
class MainComponent extends React.Component
{
  render(){
    return(
      <>
        <FormDemo />
      </>
    )
  }
}
ReactDOM.render(
  <MainComponent />,
  document.getElementById("container")
)