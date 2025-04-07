// src/components/Testimonials.jsx
function Testimonials() {
    return (
      <section className="py-5 bg-light text-dark" id="testimonials">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">What the Beasts Say</h2>
          <div className="row g-4">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">“Started following this page a month ago — mindset is different now. Discipline is 🔥.”</p>
                  <h6 className="mt-3 fw-bold">— Arjun, 22</h6>
                </div>
              </div>
            </div>
  
            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">“Downloaded the free ebook. Didn't expect it to be this raw. I'm locked in.”</p>
                  <h6 className="mt-3 fw-bold">— Nihal, 20</h6>
                </div>
              </div>
            </div>
  
            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">“I booked the 1-on-1 call. Bro just unlocked something in my head. Beast mode initiated.”</p>
                  <h6 className="mt-3 fw-bold">— Karan, 24</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  