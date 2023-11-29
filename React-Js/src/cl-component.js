class BannerComponent extends React.Component
{
  render() {
    return (
      <>
        <h2>Amazon Shopping</h2>
      </>
    )
  }
}
class Login extends React.Component
{
  render() {
    return (
      <>
      <h3>User Login</h3>
    <dl>
      <dt>User Name</dt>
      <dd><input type="text" /></dd>
      <dt>Password</dt>
      <dd><input type="password" /></dd>
    </dl>
    <button>Login</button>
      </>
    )
  }
}
class MainComponent extends React.Component
{
  render() {
    return (
      <>
        <BannerComponent />
        <Login />
      </>
    )
  }
}
ReactDOM.render(
  <>
    <MainComponent />
  </>,
  document.getElementById("container")
)