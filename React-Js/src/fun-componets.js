class CounterComponent extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      Name: 'Nike Casuals',
      Price: 4500.99,
      Stock: true,
      Photo: '../../assets/Shoe.jpeg',
      Cities: ['Delhi','Hyderabad'],
      data: [
        {Name: 'Tv', Price: 43000.99},
        {Name: 'Shoe', Price: 2000.99}
      ]
    }
  }
  render() {
      return(
        <>
          <dl>
            <dt>Name</dt>
            <dd>{this.state.Name}</dd>
            <dt>Price</dt>
            <dd>{this.state.Price}</dd>
            <dt>Stock</dt>
            <dd>{(this.state.Stock)?"Available":"Out of Stock"}</dd>
            <dt>Preview</dt>
            <dd>
              <img src={this.state.Photo} width="100" height="100"/>
            </dd>
            <dt>Shipped To</dt>
            <dd>
              <ul>
                {
                  this.state.Cities.map(city => (
                    <li>{city}</li>
                  ))
                }
              </ul>
            </dd>
          </dl>
          <hr />
          <table border="1" width="300">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      this.state.map(product => (
                        <tr>
                          <td>{product.Name}</td>
                          <td>{product.Price}</td>
                        </tr>
                      ))
                    }
                </tbody>
          </table>
        </>
      )
    }
}
ReactDOM.render(
  <CounterComponent />,
  document.getElementById("container")
)