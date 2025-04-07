// src/components/Products.jsx
function Products() {
    return (
      <section className="py-5 bg-dark text-light" id="products">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Level Up Tools</h2>
          <div className="row g-4">
            {/* Ebook Card */}
            <div className="col-md-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">🔥 The Alpha Mindset</h5>
                  <p className="card-text">Download this FREE eBook to rewire your discipline and destroy laziness.</p>
                  <a href="#" className="btn btn-outline-light mt-3">Download Now</a>
                </div>
              </div>
            </div>
            {/* Affiliate Product */}
            <div className="col-md-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">⚔️ Beard Growth Kit</h5>
                  <p className="card-text">Best grooming tool for every savage — my #1 Amazon pick. 💈</p>
                  <a href="#" className="btn btn-outline-light mt-3">Buy via Amazon</a>
                </div>
              </div>
            </div>
            {/* Consult Call */}
            <div className="col-md-4">
              <div className="card bg-secondary text-light h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">📞 Book a 1-on-1 Call</h5>
                  <p className="card-text">Need to talk beast-to-beast? I got you. 15 min, no BS.</p>
                  <a href="#" className="btn btn-outline-light mt-3">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Products;
  