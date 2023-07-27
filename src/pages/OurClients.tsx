import Image1 from "../assets/client1.df12822ba5f2456d26c2.png"
import Image2 from "../assets/client4.4c5bd540554dbe2f5438.png"
import Image3 from "../assets/client5.a7cfd81192e56ccd1a1d.png"

interface DataType {
    image: string
    title: string
    name: string
}

const datas: DataType[] = [
    {
        title: "Working with this real estate agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily.",
        name: "Adam Johnson, Homebuyer",
        image: Image1
    },
    {
        title: "I was impressed with this agency's marketing strategy when we were selling our home. They really went above and beyond to showcase my home and attract potential buyers.",
        name: "Michael Smith, Home Seller",
        image: Image2
    },
    {
        title: "I've been working with this agency for several years now for property management services, and they've been fantastic. They handle everything really well.",
        name: "David Brown, Property Owner",
        image: Image3
    },
]
const OurClients = () => {
    return (
        <div id="client" className="bg-gray-100">
            <div className="container mx-auto min-h-screen w-full flex flex-col justify-center items-center">
                <div className="text-center">
                    <h2 className="text-xl md:text-3xl font-bold mb-2">Our Clients</h2>
                    <h3 className="text-lg md:text-xl">See what our clients have to say about us.</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-6">
                    {datas.map((data: DataType, index: number) => (
                        <div className="shadow-md rounded-lg bg-white p-8 flex flex-col gap-4" key={index}>
                            <div className="flex justify-center"><img className="w-24 h-24 object-cover rounded-full" src={data.image} alt="Client 1" /></div>
                            <p>{data.title}</p>
                            <p>{data.name}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients