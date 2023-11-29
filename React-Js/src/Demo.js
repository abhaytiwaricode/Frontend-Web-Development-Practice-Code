const data = [
  {Name: "JBL Speaker", Price: 850.99, Photo: "../../assets/speaker.jpeg"},
  {Name: "Nike Casuals", Price: 5999.99, Photo: "../../assets/Shoe.jpeg"},
  {Name: "Earpods", Price: 1499.99, Photo: "../../assets/earpods.jpg"},
  {Name: "T-Shirts", Price: 999.99, Photo: "../../assets/T-Shirts.jpg"}
];

const element = (
  <>
    <div className="card-deck d-flex">
      {
        data.map(product => 
          <div className="card m-3 w-25 text-center" key={product.Name}>
            <div className="card-header">
              <h4>{product.Name}</h4>
            </div>
            <div className="card-body">
              <img src={product.Photo} width="100" height="100" />
              <p>&#8377;{product.Price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        )
      }
    </div>
  </>
)
ReactDOM.render(
  element, 
  document.getElementById("container")
)