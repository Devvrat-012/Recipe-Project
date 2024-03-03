
export default function Contact() {
  return (
    <div>
      <div className="m-2 p-8 grid grid-cols-2 rounded-lg bg-slate-100">
        <div>
          <h1 className="font-semibold text-xl mb-10">Contact Us :</h1>
          <div className="mt-5">
            <span className="font-semibold">Address:</span>
            <p>SLIET Longowal</p>
          </div>
          <div className="mt-5">
            <span className="font-semibold">Email:</span>
            <p>starkji555@gmail.com</p>
          </div>
          <div className="mt-5">
            <span className="font-semibold">Phone:</span>
            <p>+91 93307643079</p>
          </div>
        </div>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              rows="2"
              placeholder="Message"
              required
              className="border  p-2"
            ></textarea>
          </div>
          <button className="text-white link-component">
            <span className="bg-slate-500 p-2 rounded-md hover:opacity-80">
              {" "}
              Send Message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
