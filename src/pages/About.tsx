import Image from "../assets/about.png"
const About = () => {
    return (
        <>
            <div id="about" className="bg-amber-800">
                <div className='container mx-auto w-full min-h-screen  flex gap-8 flex-col justify-center md:flex-row'>
                    <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center">
                        <img src={Image} alt="About us" className="w-full h-auto rounded-tr-full object-cover" />
                    </div>
                    <div className="w-full bg-gray-100 flex flex-col justify-center p-4 gap-6 md:text-2xl text-md">
                        <h2 className="md:text-4xl text-xl font-bold text-amber-800">About Us</h2>
                        <p>Welcome to my premier real estate agency, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.</p>
                        <p>We are committed to staying up-to-date with the latest trends and technologies in the real estate market, and we use our knowledge and expertise to guide our clients through the buying and selling process with confidence.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About