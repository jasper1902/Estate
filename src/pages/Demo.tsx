import demoVideo from '../assets/video.a0703970b867917b1dd9.mp4';
import { BsFillHouseFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';

const Demo = () => {
    const videoSrc = demoVideo;
    const realEstateText = 'Real';
    const realEstateSubText = 'Estate';
    const propertyFeatures = [
        { icon: <BsFillHouseFill />, text: 'Spacious and comfortable living spaces' },
        { icon: <MdLocationOn />, text: 'Located in prime areas with excellent infrastructure' },
        { icon: <AiFillDollarCircle />, text: 'Affordable prices and flexible payment plans' },
    ];

    return (
        <div id="demo" className="flex flex-col md:flex-row w-full min-h-screen bg-amber-800">
            <div className="container mx-auto md:flex  md:flex-row">
                <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex flex-col items-center justify-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-center">{`${realEstateText}  `}
                            <span className="text-amber-800">{realEstateSubText}</span>
                        </h2>
                        <video className="w-full h-full aspect-w-16 aspect-h-9" controls>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
                    <div className="text-white flex flex-col gap-4">
                        <h2 className="md:text-1xl text-lg font-bold">My Real Estate</h2>
                        <h2 className="md:text-3xl text-xl font-bold">Why Choose Our Properties?</h2>
                        {propertyFeatures.map(({ icon, text }) => (
                            <p key={text} className="flex gap-2 cursor-pointer items-center ">{icon} {text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demo;
