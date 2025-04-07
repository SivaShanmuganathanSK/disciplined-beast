function Login() {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-dark w-100">Login</button>
            <p className="text-center mt-3">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  