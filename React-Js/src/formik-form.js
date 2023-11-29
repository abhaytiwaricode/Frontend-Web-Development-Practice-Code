const { useFormik } = require("formik")
const FormDemo = () => {
  const formik = useFormik({
    initialValues : {
        ProductId: '',
        Name: '',
        Price: ''
      },
      onSubmit: values => {
        console.log(JSON.stringify(values));
      }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
          <dl>
            <dt>Product Id</dt>
            <dd>
              <input type="text" onChange={formik.handleChange} name="ProductId" value={formik.values.ProductId} />
            </dd>
            <dt>Name</dt>
            <dd>
              <input type="text" onChange={formik.handleChange} name="Name" value={formik.values.Name} />
            </dd>
            <dt>Price</dt>
            <dd>
              <input type="text" onChange={formik.handleChange} name="Price" value={formik.values.Price} />
            </dd>
          </dl>
          <button>Register</button>
      </form>
    </div>
  )
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