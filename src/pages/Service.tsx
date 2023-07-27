import Image1 from "../assets/service1.4cedacd498a61b8c7d52.png"
import Image2 from "../assets/download.png"
import Image3 from "../assets/service3.3df87116a6518f6c6c9d.png"
interface DataType {
    title: string;
    description: string;

    image: string;

}

const datas: DataType[] = [
    {
        title: "Home Buying",
        description: "We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem.",
        image: Image1,
    },
    {
        title: "Home Selling",
        description: "We help you sell your home quickly and for the best price. Our team of experts will provide you with a customized marketing strategy to attract potential buyers and maximize your home's value.",
        image: Image2,
    },
    {
        title: "Property Management",
        description: "We provide comprehensive property management services to help you manage your rental properties. Our team of experts will handle everything from tenant screening to maintenance and repairs.",
        image: Image3,
    },
]
const Service = () => {
    return (
        <div id="service" className="bg-gradient-to-b from-white to-gray-200 md:mt-2">
            <div className="container mx-auto">
                <div className="w-full min-h-screen p-6 flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Our <span className="text-amber-800">Services</span></h2>
                        <p>We offer many services for our clients, Here are some of our services:</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 mt-8">

                        {datas.map((data: DataType, index: number) => (

                            <div key={index} className="bg-white rounded-lg shadow-lg hover:scale-110 duration-500">
                                <img src={data.image} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
                                <div className="py-6 px-4">
                                    <h3 className="text-lg font-medium text-gray-900">{data.title}</h3>
                                    <p className="text-sm text-gray-500">{data.description}</p>
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

export default Service