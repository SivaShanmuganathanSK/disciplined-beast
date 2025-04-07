// src/components/Testimonials.jsx
function Testimonials() {
    return (
      <section className="bg-light py-5" id="testimonials">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What Beasts Are Saying</h2>
  
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <p>"This page gave me the clarity and fire to start changing my life."</p>
                <h6 className="mt-3 fw-bold">— Anbu, 21</h6>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <p>"The free guide was insane. I wake up at 5AM now and never miss a workout."</p>
                <h6 className="mt-3 fw-bold">— Vishnu, 19</h6>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="p-4 border rounded">
                <p>"I got more from this page in 1 week than scrolling reels all year."</p>
                <h6 className="mt-3 fw-bold">— Rahul, 24</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  