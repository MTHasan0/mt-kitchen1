
function Header() {
    return (
        <div>

            <div className="lg:flex bg-base-100 items-center">
                <div className="pb-5">
                    <a className='text-2xl font-bold'>MT Kitchen</a>
                </div>
                <div className="lg:flex gap-12 space-x-5 lg:space-x-0 text-lg m-auto">
                    <a role='button' className="">Home</a>
                    <a role='button' className="">Recipes</a>
                    <a role='button' className="">About</a>
                    <a role='button' className="">Search</a>

                </div>
                <div className="flex lg:gap-2 gap-5 justify-center items-center my-5 lg:py-0">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered lg:w-44 md:w-auto" />
                    </div>
                    <div>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/dK124g3/1677507598430.jpg" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

Header.propTypes = {

};


export default Header;