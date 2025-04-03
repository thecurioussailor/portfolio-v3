const Footer = () => {
  return (
    <div className="bg-black text-white p-20 pb-10 flex flex-col gap-16 border-gray-200">
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Let&apos;s Talk</h1>
            <h1 className="text-6xl">hello@ashutoshsagar.com</h1>
        </div>
        <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-3xl font-bold">Get in touch</h1>
                <div className="flex gap-4">
                    <input type="text" placeholder="Enter your email" className="border border-zinc-800 outline-none rounded-full p-2 px-6 w-72"/>
                    <button className="bg-white text-black rounded-full p-3 px-6">Subscribe</button>
                </div>
            </div>
            <div className="flex gap-4 w-1/2">
                <div>
                    <h1>Follow me</h1>
                    <div>
                        <h1>Instagram</h1>
                        <h1>Twitter</h1>
                        <h1>LinkedIn</h1>
                        <h1>Facebook</h1>
                    </div>
                </div>
                <div>
                    <h1>Follow me</h1>
                    <div>
                        <h1>Instagram</h1>
                        <h1>Twitter</h1>
                        <h1>LinkedIn</h1>
                        <h1>Facebook</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <h1>© 2025 Ashutosh Sagar. All rights reserved.</h1>
            <div className="flex gap-4">
                <h1>Privacy Policy</h1>
                <h1>Terms of Service</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer