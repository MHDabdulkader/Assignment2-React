
function Card({id, name, price, image, tag}){
    return (
        <div className="text-center h-full mt-2 p-3  rounded-sm">
            {/* <h1>{id}</h1> */}
            <h1 className="text-sm font-extralight p-2"><span className="w-fit bg-red-400 p-2 rounded-md">{tag}</span></h1>
            <h1 className="text-lg font-normal p-1">{name}</h1>
            <h1 className="text-sm font-semibold p-2">
                <span className="w-fit bg-black text-white p-2 rounded-md">{price}</span></h1>
            <div className="w-full h-full mb-4 p-1">
                <img className="w-full h-full object-cover rounded-t-lg" src={image} alt={name} />
            </div>
            
        </div>
    )
}

export default Card;