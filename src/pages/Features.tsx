import Image1 from "../assets/1.7f6375a11558a00c3d21.png"
import Image2 from "../assets/2.844abb73f5989e31752b.png"
import Image3 from "../assets/3.a3b122f8600e5cc52922.png"
interface DataType {
    title: string;
    description: string;
    price: number;
    image: string;
}

const datas: DataType[] = [
    {
        title: "123 Main St",
        description: "3 bd | 2 ba | 1,500 sqft",
        price: 500000,
        image: Image1
    },
    {
        title: "456 Oak St",
        description: "4 bd | 3 ba | 2,000 sqft",
        price: 750000,
        image: Image2
    },
    {
        title: "789 Maple Ave",
        description: "2 bd | 1 ba | 1,000 sqft",
        price: 300000,
        image: Image3
    },
]
const Features = () => {
    return (

        <div id="feature" className="bg-gradient-to-b from-gray-300 to-white md:mt-2">
            <div className="container mx-auto">
                <div className="w-full min-h-screen p-6 flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Feature  <span className="text-amber-800">Properties</span></h2>
                        <p>Here are some of our featured properties:</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 mt-8">

                        {datas.map((data: DataType, index: number) => (

                            <div key={index} className="bg-white rounded-lg shadow-lg hover:scale-110 duration-500">
                                <img src={data.image} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                    <h3 className="text-lg font-medium text-gray-900">{data.title}</h3>
                                    <p className="text-sm text-gray-500">{data.description}</p>
                                    <p className="text-lg font-bold text-gray-700 mt-4">${data.price.toLocaleString()}</p>
                                    <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                                        View Details
                                    </button>
                                </div>
                            </div>

                        ))}


                    </div>

                </div>
            </div>
        </div>

    )
}

export default Features