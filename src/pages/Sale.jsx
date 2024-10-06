import Card from "../Components/Card";
import NavBar from "../Components/NavBar";




const newSale = [
    {
        id: 1,
        tag: "tag 1",
        name: "Corfu",
        image: "src/assets/images/black.jpg",
        price: "৳ 2,783.55"
    },
    {
        id: 2,
        tag: "tag 2",
        name: "Cool",
        price: "৳ 869.40",
        image: "src/assets/images/Cool.jpg"
    }
    ,
    {
        id: 3,
        tag: "tag 2",
        name: "Evening dress",
        price: "৳ 869.40",
        image: "src/assets/images/Evening Dress.jpg"
    }
    ,
    {
        id: 4,
        tag: "tag 2",
        name: "Voguing",
        price: "৳ 869.40",
        image: "src/assets/images/Voguing.jpg"
    }
]


function Sale() {
    return (
        <div className=" container mx-auto py-5">
            <NavBar />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-28">
                {
                    newSale.map(el => (
                        <Card
                            key={el.id}
                            tag={el.tag}
                            name={el.name}
                            price={el.price}
                            image={el.image}
                        />
                    ))
                }
            </div>

            {/* <h1>Sales items</h1> */}
        </div>
    )

}

export default Sale;