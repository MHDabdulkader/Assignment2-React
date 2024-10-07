import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
// datas:
const CollectionData = [
    { id: 1, name: "Red Autumn Jacket", collection: "Autumn Clothing", size: "M" },
    { id: 2, name: "Brown Leather Boots", collection: "Autumn Clothing", size: "10" },
    { id: 3, name: "Cozy Sweater", collection: "Winter Clothing", size: "L" },
    { id: 4, name: "Winter Coat", collection: "Winter Clothing", size: "M" },
    { id: 5, name: "Blue Beach Shirt", collection: "Beach Clothing", size: "L" },
    { id: 6, name: "White Flip-Flops", collection: "Beach Clothing", size: "9" },
    { id: 7, name: "Denim Shorts", collection: "Summer Clothing", size: "M" },
    { id: 8, name: "Tank Top", collection: "Summer Clothing", size: "L" },
    { id: 9, name: "Wool Scarf", collection: "Winter Clothing", size: "One Size" },
    { id: 10, name: "Raincoat", collection: "Autumn Clothing", size: "L" },
    { id: 11, name: "Sneakers", collection: "Summer Clothing", size: "10" },
    { id: 12, name: "Beach Towel", collection: "Beach Clothing", size: "One Size" },
    { id: 13, name: "Cargo Pants", collection: "Autumn Clothing", size: "M" },
    { id: 14, name: "Snow Boots", collection: "Winter Clothing", size: "11" },
    { id: 15, name: "Hawaiian Shirt", collection: "Beach Clothing", size: "L" },
    { id: 16, name: "Puffer Jacket", collection: "Winter Clothing", size: "M" },
    { id: 17, name: "Autumn Beanie", collection: "Autumn Clothing", size: "One Size" },
    { id: 18, name: "Beach Sandals", collection: "Beach Clothing", size: "9" },
    { id: 19, name: "Winter Gloves", collection: "Winter Clothing", size: "One Size" },
    { id: 20, name: "Flannel Shirt", collection: "Autumn Clothing", size: "L" },
    { id: 21, name: "Board Shorts", collection: "Beach Clothing", size: "M" },
    { id: 22, name: "Swim Trunks", collection: "Beach Clothing", size: "L" },
    { id: 23, name: "Winter Socks", collection: "Winter Clothing", size: "One Size" },
    { id: 24, name: "Parka", collection: "Winter Clothing", size: "L" },
    { id: 25, name: "Autumn Scarf", collection: "Autumn Clothing", size: "One Size" },
    { id: 26, name: "Rain Boots", collection: "Autumn Clothing", size: "9" },
    { id: 27, name: "Sunglasses", collection: "Beach Clothing", size: "One Size" },
    { id: 28, name: "Summer Dress", collection: "Summer Clothing", size: "M" },
    { id: 29, name: "Winter Hat", collection: "Winter Clothing", size: "One Size" },
    { id: 30, name: "Sandals", collection: "Beach Clothing", size: "10" },
];

// filter that values
const getFilterValue = (data, key) => {
    return ["All", ...new Set(data.map(el => el[key]))];
}

// console.log(getFilterValue(CollectionData, "size"));


function Collection() {

    const [filterValue, setFilteValue] = useState({ collections: "All", sizes: "All" });
    const [collections, setCollection] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [show, setShow] = useState([]);

    // load all data
    useEffect(() => {
        setShow(CollectionData);
        setCollection(getFilterValue(CollectionData, "collection"));
        setSizes(getFilterValue(CollectionData, "size"))

        // let setShowData = CollectionData;
        // if(filterValue.collections === 'All'){
        //     setShow(setShowData);
        // }
        // if(filterValue.sizes === 'All'){
        //     setShow(setShowData)
        // }
        // // setShow()
    }, [])

   
    useEffect(() => {
        let setShowData = CollectionData;
        console.log("set show data ", setShowData)
        if (filterValue.collections !== "All") {
            setShowData = setShowData.filter(el => el.collection === filterValue.collections)
        }
       
        // console.log("Set show after s")
        

        if (filterValue.sizes !== "All") {
            setShowData = setShowData.filter(el => el.size === filterValue.sizes)
        }
       
        console.log("set after show data ", setShowData)
        setShow(setShowData)

    }, [filterValue])

    const handleFilter = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        
        console.log(value, name)
        setFilteValue(el => ({
            ...el,
            [name]: value
        }))
    }

    // console.log(collections);
    // console.log(sizes);
    console.log(show);
    console.log("Filter value", filterValue)
    return (
        <>
            <NavBar />
            <div className="flex justify-center mt-5 bg-slate-200 p-2">
                <div>
                    <label>Filter By Collection</label>
                    <select
                        name="collections"
                        id="Collections"
                        value={filterValue.collections}
                        onChange={handleFilter}
                    >
                        {collections.map((el, index) => (
                            <option value={el} key={index}>{el}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Filter By size</label>
                    <select
                        name="sizes"
                        id="sizes"
                        value={filterValue.sizes}
                        onChange={handleFilter}
                    >
                        {sizes.map((el, index) => (
                            <option value={el} key={index}>{el}</option>
                        ))}
                    </select>
                </div>


                

            </div>
            {/* render all  */}
            <div className="bg-red-100 grid gap-2  lg:grid-cols-3  md:grid-cols-2"> 
                {
                    show.length > 0 ?
                    show.map((el) => (
                    <div className="bg-slate-50 px-3 py-1 flex items-center flex-col" key={el.id}>
                        <h1>{el.name}</h1>
                        <h1>{el.collection}</h1>
                        <h1>{el.size}</h1>
                    </div>
                    ))

                    : <div className="bg-slate-5">
                        <h1>List not founded</h1>
                    </div>
                } 
            </div>
               


        </>
    )
}

export default Collection;