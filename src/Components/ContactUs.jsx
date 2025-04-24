 export default function ContactUs() {
 
  return (
    <div id="contactus" className="flex justify-around pt-10 pb-12 bg-gray-200 shadow-[rgba(15,0,0,0.5)_10px_5px_4px_0px] ">
      <div className="w-130 ">
        <h1 className="text-4xl  pt-10 font-extrabold"> Contact Us </h1>
        <div className="text-shadow-sm  font-bold text-2xl py-7"> Email:
          <a className="p-3 text-orange-500 font-bold " href="https://mail.google.com/mail/u/1/#inbox?compose=new">Parvassharma662@gmail.com</a>
          <div className="py-2 font-semibold"> 
            Phone No: <span> +919805571585</span>
          </div>
        </div>
      </div>
      <div>
        <form className="p-8 max-w-md mx-auto bg-white rounded-2xl shadow-xl/20 space-y-4">
          <h3 className="text-2xl font-bold">Get in touch</h3>
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
          <input
            type="number"
            placeholder="Your Phone Number"
            className="w-full border p-2 rounded"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border p-2 rounded"
          ></textarea>
          <div className="flex justify-center">  
            <button
              type="submit"
              className="bg-orange-500  text-white py-2 px-4 rounded hover:bg-orange-600"
              onClick={()=>{
                alert("Your message has been sent Successfully!!")  
                setName("")
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}