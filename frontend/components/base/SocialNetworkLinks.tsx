import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from "react-icons/bs";


const SocialNetworkLinks = () => {
    return (
        <div className="flex space-x-6 sm:justify-center sm:mt-0 mt-10 text-gray-400">
            <a href="#" className="hover:text-white">
                <BsFacebook />
            </a>
            <a href="#" className="hover:text-white">
                <BsLinkedin />
            </a>
            <a href="#" className="hover:text-white">
                <BsTwitter />
            </a>
            <a href="#" className="hover:text-white">
                <BsGoogle />
            </a>
        </div>
    );
}
export default SocialNetworkLinks;