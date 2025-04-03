const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex border border-gray-200 rounded-full w-fit p-2 px-4">
            <h1 className="text-sm">Available for New Projects & Exciting Opportunities</h1>
        </div>
        <div className="flex flex-col gap-4 pt-5">
            <h1 className="text-6xl font-bold">Hey, I’m Ashutosh Sagar</h1>
            <h3 className="text-2xl font-bold">Full-Stack Developer | MERN | Next.js | SaaS Builder</h3>
            <p className="text-gray-500 text-lg">I&apos;m Ashutosh Sagar, a passionate full-stack developer specializing in building high-performance web applications, SaaS products, and scalable systems.</p>
        </div>
        <div className="flex gap-4 pt-5">
            <button className="rounded-full cursor-pointer tracking-wider px-4 py-3 bg-[#4378E5] text-white w-fit hover:bg-zinc-800 transition-all duration-300">About Me</button>
            <button className="rounded-full cursor-pointer tracking-wider px-4 py-3 border border-zinc-800 w-fit hover:bg-zinc-800 hover:text-white transition-all duration-300">Explore Works</button>
        </div>
    </div>
  )
}

export default Dashboard