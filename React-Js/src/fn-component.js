const TopBanner = ()=> (
  <>
    <div className="bg-danger text-white text-center">
      <h2>Amazon Shopping</h2>
    </div>
  </>
);
const FooterContent = ()=> (
  <>
    <div className="bg-danger text-white text-center">
      <span>&copy; copyright 2023</span>
    </div>
  </>
);
const MainContent = ()=> (
  <>
    <div style={{height: '400px'}}>
      <h2>Home</h2>
      <p>Online Shopping</p>
      <LoginComponent />
    </div>
  </>
);
const LoginComponent = ()=> (
  <>
    <div className="container w-25">
      <h3 className="text-center">User Login</h3>
    <dl>
      <dt>User Name</dt>
      <dd><input type="text" className="form-control" /></dd>
      <dt>Password</dt>
      <dd><input type="password" className="form-control" /></dd>
    </dl>
    <button className="btn btn-primary w-25">Login</button>
    </div>
  </>
);
ReactDOM.render(
  <>
    <TopBanner />
    <MainContent />
    <FooterContent />
  </>,
  document.getElementById("container")
)