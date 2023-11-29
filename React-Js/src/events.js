class Product extends React.Component
{
  constructor(props){
    super(props);
      this.state = {
        msg : '',
        users : [
          {UserName: 'john'},
          {UserName: 'john12'}
        ]
    }
    this.VerifyUser = this.VerifyUser.bind(this);
  }

  VerifyUser(e) {
    for(var user of this.state.users) {
      if(user.UserName == e.target.value) {
        this.setState({
          msg: 'User Name Taken'
        })
        break;
      } 
      else {
        this.setState({
          msg: 'User Name Available'
        })
      }
    }
  }
  render() {
    return(
      <>
        User Name :
        <input type="text" onKeyUp={this.VerifyUser} name="username" />
        <span>{this.state.msg}</span>
      </>
    )
  }
}
const MainComponent = () => (
  <>
    <h3>Events Demo</h3>
    <Product />
  </>
)
ReactDOM.render(
  <MainComponent />,
  document.getElementById("container")
)