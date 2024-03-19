

import './Banner.css'
function Banner() {
    return (
        <div>
            <div className="hero bg-cover rounded-xl banner-image lg:mt-10">
                <div className="rounded-3xl hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:pt-36 pt-16 lg:space-x-10">
                        <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking <br></br> class tailored for you!</h1>
                        <p className="py-10">In the heart of culinary creation, the kitchen hums with the rhythm of chopping, sizzling, and simmering, <br></br> orchestrating a symphony of flavors...</p>
                        <div className='flex gap-5 justify-center mb-16 lg:mb-32'>
                            <button className="btn border-none bg-[#0be58a] rounded-3xl">Explore Now</button>
                            <button className="btn btn-outline text-white font-bold rounded-3xl">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

Banner.propTypes = {

};

export default Banner;