function Hero() {
    return (
        <div className="flex justify-around items-center relative bg-purple-50 p-10">
            {/* Right contant */}
            <div className="ml-2"> 
                {/* title, subtitle, shop btn*/}
                <div className="text-center mb-5">
                    <h1 className=" text-5xl w-52 font-semibold mb-2 p-1">Trending Collection</h1>
                    <p className=" text-lg w-52 font-normal text-gray-600 mb-2 p-2">Elegance is beauty. It’s the kind that never fades.</p>
                    <a className="px-7 py-3 rounded-md bg-red-500 text-white" href="">Shopping</a>


                </div>
                {/* state score */}

                <div className="text-center">
                    <div>
                        <h1 className="text-2xl font-bold p-1">100k</h1>
                        <p className="text-lg font-semibold p-1" >Happy Customers</p>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold p-1">1M</h1>
                        <p className="text-lg font-semibold p-1">Daily Sales Fire</p>
                    </div>
                </div>
            </div>

            {/* image fashion model */}

            <div className="w-1/2 top-10  ">
                <img src="https://github.com/user-attachments/assets/4d8cf01c-7124-43c7-88b0-0a05f58435e7" alt="" />
            </div>

            {/* Left contant */}
            <div className=" text-center mr-5">
                {/* sales title, sales percentage, deal btn */}
                <p className="text-lg font-semibold p-1">Fashion Sale</p>
                <h1  className="text-2xl font-bold p-1 mb-2"><span className="text-red-700 font-extrabold text-5xl">5%</span> off</h1>
                <a className="px-4 py-2 rounded-md bg-red-500 text-white" href="">Deal</a>
            </div>
        </div>
    )

}

export default Hero;