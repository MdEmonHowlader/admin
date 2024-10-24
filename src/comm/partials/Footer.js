import React from "react";

const Footer = () => {
  return (
    <footer class="py-4 bg-light mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
          <small class="text-silver">Copyright &copy; Emon {new Date().getFullYear()} | Version 0.1.0 Bate</small>
          <div>
            <small>Developed By <a href="#">Emon</a></small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
