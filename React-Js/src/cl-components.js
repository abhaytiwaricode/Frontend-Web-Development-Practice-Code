class Product extends React.Component
{
  Name;
  Price;
  Photo;
  render(){
    return (
      <>
        <dl>
          <dt>Name</dt>
          <dd>{this.props.Name}</dd>
          <dt>Price</dt>
          <dd>{this.props.Price}</dd>
          <dt>Photo</dt>
          <dd>
            <img src={this.props.Photo} width="100" height="100" />
          </dd>
        </dl>
      </>
    )
  }
}
class MainComponent extends React.Component
{
  render (){
    return (
      <>
        <div className="card-deck">
            <Product Name={'Nike Casuals'} Price={5000.99} Photo={'../../assets/Shoe.jpeg'} />
            <Product Name={'T-Shirts'} Price={550.99} Photo={'../../assets/T-Shirts.jpg'} />
        </div>
      </>
    )
  }
}
ReactDOM.render(
  <MainComponent />,
  document.getElementById("container")
)