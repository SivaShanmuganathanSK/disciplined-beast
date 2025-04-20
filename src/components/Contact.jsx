// src/components/Contact.jsx
function Contact() {
    return (
      <section className="py-5 bg-light" id="contact">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="col-12">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="col-12 text-center">
              <a href="href=skplayboysiva@gmail.com"> <button type="submit" className="btn btn-dark px-4">Send Message</button></a>
              
            </div>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  