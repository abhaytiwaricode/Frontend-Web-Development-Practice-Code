function LoginSuccess(){
  return <h3>Login Success</h3>
}
function LoginFailure(){
  return <h3>Login Failed - Check the Username / Password </h3>
}
class MainComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      content: '',
      username: '',
      password: ''
    }
    this.GetUserName = this.GetUserName.bind(this);
    this.GetPassword = this.GetPassword.bind(this);
    this.LoginClick = this.LoginClick.bind(this);
  }
  GetUserName(e){
    this.setState({
      username: e.target.value
    })
  }
  GetPassword(e){
    this.setState({
      password: e.target.value
    })
  }
  LoginClick(){
    if(this.state.username == "john" && this.state.password == "admin"){
      this.setState({
        content: <LoginSuccess />
      })
    } else {
      this.setState({
        content: <LoginFailure />
      })
    }
  }
  render(){
    return(
      <>
        <h2>User Login</h2>
        <dl>
          <dt>User Name</dt>
          <dd><input type="text" /></dd>
          <dt>Password</dt>
          <dd><input type="password" /></dd>
        </dl>
        <button onClick={this.LoginClick}>Login</button>
        <br />
        <hr />
        <div>{this.state.content}</div>
      </>
    )
  }
}
ReactDOM.render(
  <MainComponent />,
  document.getElementById("container")
)