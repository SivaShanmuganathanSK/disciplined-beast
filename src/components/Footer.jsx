// src/components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <h5 className="fw-bold mb-3">Disciplined Beast 🐺</h5>
          <div className="mb-3">
            <a href="#about" className="text-light me-3">About</a>
            <a href="#products" className="text-light me-3">Products</a>
            <a href="#testimonials" className="text-light me-3">Reviews</a>
          </div>
          <div className="mb-3">
          <a href="https://instagram.com/disciplinedbeast_22" target="_blank" className="text-light me-2">📸 Instagram</a>
          <a href="https://t.me/disciplinedbeast_22" target="_blank" className="text-light me-2">📸 Telegram</a>
          </div>
          <p className="mb-0 small">© 2025 Disciplined Beast. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  