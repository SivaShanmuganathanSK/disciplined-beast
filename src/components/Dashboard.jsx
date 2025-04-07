function Dashboard() {
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">Welcome, Disciplined Beast 🐺</h2>
  
        <div className="row g-4">
  
          {/* 🔥 Free Ebook */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Free eBook</h5>
                <p className="card-text">Unlock your discipline — download now!</p>
                <a href="#" className="btn btn-primary w-100">Download</a>
              </div>
            </div>
          </div>
  
          {/* 💸 Affiliate Product */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Top Gear (Affiliate)</h5>
                <p className="card-text">Buy tools that build beasts 🏋️</p>
                <a href="#" className="btn btn-success w-100" target="_blank">Check it Out</a>
              </div>
            </div>
          </div>
  
          {/* 📞 Consultation Call */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">1:1 Call</h5>
                <p className="card-text">Book a call — Let’s build you.</p>
                <a href="#" className="btn btn-dark w-100">Book Now</a>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  