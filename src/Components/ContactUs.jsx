export default function ContactUs(){
    return (
        <div> 
        <form className="p-8 max-w-md mx-auto bg-white rounded shadow space-y-4">
  <h2 className="text-xl font-semibold"> Contact Us  ----- 9805571585 
    or</h2>
  
  <input
    type="text"
    placeholder="Your Name"
    className="w-full border p-2 rounded"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full border p-2 rounded"
  />
  <textarea
    rows="4"
    placeholder="Your Message"
    className="w-full border p-2 rounded"
  ></textarea>
  
  <button
    type="submit"
    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
  >
    Send Message
  </button>
</form>
</div>
    )
}