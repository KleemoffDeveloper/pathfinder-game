import React from 'react';

export default function Contact() {
  return (
    <div class="unique-container">
    <span class="unique-big-circle"></span>
    <img src="img/shape.png" class="unique-square" alt="" />
    <div class="unique-form">
      <div class="unique-contact-info">
        <h3 class="unique-title">Let's get in touch</h3>
        <p class="unique-text">
        Feel free to reach out! Your questions matter. Contact us today for personalized assistance and support.
        </p>
  
        <div class="unique-info">
          <div class="unique-information">
            <img src="img/location.png" class="unique-icon" alt="" />
            <p>47-10 Austell Pl 2nd floor, Long Island City, NY 11101</p>
          </div>
          <div class="unique-information">
            <img src="img/email.png" class="unique-icon" alt="" />
            <p>pathfinder@support.org</p>
          </div>
          <div class="unique-information">
            <img src="img/phone.png" class="unique-icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>
  
        <div class="unique-social-media">
          <p>Connect with us :</p>
          <div class="unique-social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
  
      <div class="unique-contact-form">
        <span class="unique-circle one"></span>
        <span class="unique-circle two"></span>
  
        <form action="index.html" autocomplete="off" action="https://formspree.io/f/xpzgebyj"
  method="POST">
          <h3 class="unique-title">Contact us</h3>
          <div class="unique-input-container">
            <input type="text" name="name" class="unique-input" />
            <label for="">Username</label>
            <span>Username</span>
          </div>
          <div class="unique-input-container">
            <input type="email" name="email" class="unique-input" />
            <label for="">Email</label>
            <span>Email</span>
          </div>
          <div class="unique-input-container">
            <input type="tel" name="phone" class="unique-input" />
            <label for="">Phone</label>
            <span>Phone</span>
          </div>
          <div class="unique-input-container textarea">
            <textarea name="message" class="unique-input"></textarea>
            <label for="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" class="unique-btn" />
        </form>
      </div>
    </div>
  </div>
  
  );
}
