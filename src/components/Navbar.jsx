const NavBar = () => {
    return (
        <div className="flex justify-between items-center pt-[15px] ">
            <div className="">
                <h1 className="text-white font-bold text-[36px] cursor-pointer">Anonime</h1>
            </div>
            <div>
                <nav>
                    <a className="text-[18px] text-aMovie cursor-pointer" >Home</a>
                </nav>
            </div>
            <div>
                <nav>
                    <a className="text-[18px] text-aMovie cursor-pointer" >List anime</a>
                </nav>
            </div>
            <div>
                <input
                    className="w-[374.58px] bg-[#374151] h-[48px] rounded-full pl-5 text-aMovie "
                    placeholder="Search anime or movie"
                ></input>
            </div>
        </div>
    );
}

export default NavBar;