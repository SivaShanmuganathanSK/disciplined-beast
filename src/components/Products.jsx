// src/components/Products.jsx
function Products() {
    return (
      <section className="py-5 bg-dark text-light" id="products">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Start Your Beast Journey</h2>
  
          <div className="row g-4 justify-content-center">
            {/* eBook Card */}
            <div className="col-md-5 d-flex">
              <div className="p-4 bg-secondary rounded shadow d-flex flex-column w-100" style={{ minHeight: "200px" }}>
                <h4 className="fw-bold">🔥 Disciplined Beast eBook</h4>
                <p className="flex-grow-1">Your ultimate guide to build discipline, mindset, and fitness in 30 days.</p>
                <a
                  href="https://drive.google.com/file/d/1l4l9PdbAUyGVUaHBAZC6wg-FPGBhGfyS/view?usp=drive_link"
                  className="btn btn-light mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📥 Download eBook
                </a>
              </div>
            </div>
  
            {/* Consulting Card */}
            <div className="col-md-5 d-flex">
              <div className="p-4 bg-secondary rounded shadow d-flex flex-column w-100" style={{ minHeight: "200px" }}>
                <h4 className="fw-bold">🎯 Book 1-on-1 Call</h4>
                <p className="flex-grow-1">Personalized roadmap session to fix your routine, fitness & goals.</p>
                <a
                  href="https://forms.gle/ztcCSYhf4ksc6Zb16"
                  className="btn btn-light mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🗓️ Book Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Products;
  