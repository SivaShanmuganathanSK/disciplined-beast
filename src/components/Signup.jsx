function Signup() {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Create password" />
            </div>
            <button type="submit" className="btn btn-dark w-100">Create Account</button>
            <p className="text-center mt-3">
              Already have an account? <a href="/">Login</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  
  export default Signup;
  