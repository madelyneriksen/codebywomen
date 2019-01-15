import React from 'react';
import 'tachyons';


const formClasses = "db ba b--dark-gray bg-near-white pa2 sans-serif w-100 mb3";
const labelClasses = "sans-serif pv2 f4 db"


export default props => (
  <form method="POST" action="https://www.briskforms.com/go/0005462d369d88f6a0c56d1534976dda" className="db mv4">
    <label for="name" className={labelClasses}>Your Name</label>
    <input
      type="text"
      name="name"
      id="name"
      className={formClasses}
      placeholder="Your Name"
      required />
    <label for="email" className={labelClasses}>Your Email</label>
    <input
      type="email"
      name="email"
      id="email"
      className={formClasses}
      placeholder="Your Email Address"
      required />
    <label for="name" className={labelClasses}>Message</label>
    <textarea
      name="message"
      id="message"
      className={formClasses}
      placeholder="Questions, comments, concerns..."
      required />
    <button type="submit" className="db sans-serif near-white bn bg-near-black bg-animate hover-bg-mid-gray b ttu w-100 pv3 tc pointer">SUBMIT</button>
  </form>
)
