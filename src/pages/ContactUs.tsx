import { LuNavigation } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { IconType } from "react-icons";

type ContactInfoProps = {
    icon: React.ReactElement<IconType>;
    text: string;
};

const ContactInfo = ({ icon, text }: ContactInfoProps): JSX.Element => {
    return (
        <p className="flex items-center cursor-pointer">
            <div className="text-amber-800">{icon}</div> <span className="mx-2">{text}</span>
        </p>
    );
};

function ContactUs() {
    const defaultAddress = "1234 Main St, Anytown USA 12345";
    const defaultPhone = "(123) 456-7890";
    const defaultEmail = "info@example.com";

    return (
        <div id="contact" className="bg-gray-100">
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full min-h-screen flex-col md:flex-row">

                    <div className="md:w-1/2 p-8">
                        <div className="flex flex-col gap-4 mb-8">
                            <h2 className="text-4xl font-bold">Contact Us</h2>
                            <p>
                                If you have any questions or would like to schedule a
                                consultation with one of our real estate experts, please don't
                                hesitate to contact us
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <ContactInfo icon={<LuNavigation size="25" />} text={defaultAddress} />
                            <ContactInfo icon={<HiLocationMarker size="25" />} text={defaultPhone} />
                            <ContactInfo icon={<HiLocationMarker size="25" />} text={defaultEmail} />
                        </div>
                    </div>

                    <form className="md:w-1/2 w-full p-8 flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                                Phone
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="phone"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    className="py-3 h-40 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-amber-800 py-4 px-8 rounded-lg text-white font-bold">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
