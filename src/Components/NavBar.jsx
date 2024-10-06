import { Link } from "react-router-dom";
import IconNavCollection from "./Icons/IconNavCollection";
import IconNavHome from "./Icons/IconNavHome";
import IconNavSale from "./Icons/IconNavSale";



function NavBar() {
    return (
        <div className=" container relative">
            {/* logo */}
            <div className="flex justify-start mt-2 mx-28 items-center absolute text-center md:mx-3 sm:mx-2">
                <h1 className="text-2xl text-teal-700 font-semibold">Online <span className="text-red-600">Shop</span></h1>
            </div>
            <div className="flex justify-center items-center space-x-10 mt-2 ">
                <Link to="/">
                    <IconNavHome className="bg-slate-100 p-2 hover:bg-slate-200" width={"70px"} height={"70px"} />
                </Link>
                <Link to='/sale'>
                    <IconNavSale className="bg-slate-100 p-2 hover:bg-slate-200" width={"70px"} height={"70px"} />
                </Link>
                <Link to='/collection'>
                    <IconNavCollection className="bg-slate-100 p-2 hover:bg-slate-200" width={"70px"} height={"70px"} />
                </Link>

            </div>


        </div>
    )
}

export default NavBar;