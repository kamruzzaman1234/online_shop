const Banner = ()=>{
    return(
        <section className="bg-[#faeee1] py-[80px]">
            <div className="max-w-[1460px] px-10 w-full mx-auto">
                <div className="flex flex-col lg:flex-row  md:flex-row lg:justify-between items-center">
                <div className="flex flex-col w-[630px] gap-7 text-black">
                    <h3 className="text-warning text-[16px] leading-[26px] uppercase font-medium">Choose Your Best Product</h3>
                    <h1 className="text-5xl font-bold leading-[55px]">Enjoy Your Best Shopping and Best Wishes</h1>
                    <p className="text-[16px] leading-[26px] font-medium">Unique designs to beautify your home and create a cozy vibe. Find your favorite piece today!</p>
                    <div>
                        <button className="btn uppercase text-[18px]
                         btn-outline btn-warning">Unique Dress</button>
                    </div>
                    
                </div>
                <div className="w-[600px]">
                    <img src="https://i.ibb.co/jvgnKwJW/pexels-suzyhazelwood-2536965-removebg-preview.png"
                    className="w-full object-cover" alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Banner;