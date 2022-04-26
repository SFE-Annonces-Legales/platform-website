import Image from 'next/image'
import { FunctionComponent, PropsWithChildren } from 'react';

type TextWithImageProps =  PropsWithChildren<{
    title: string;
    src: string;
    reversed: boolean;
}>

const myLoader = (width: string ) => `https://via.placeholder.com/${width}`;
const TextWithImage: FunctionComponent<TextWithImageProps> = ({ title, children, src, reversed }) => {
    return (

        <div 
            className={`flex flex-wrap justify-between my-6  ${reversed ? "flex-col lg:flex-row-reverse": "flex-col lg:flex-row"}`}
            >
            <div className="lg:max-w-45 ml-4 text-center md:text-left">
                <h4 className="sm:text-5xl text-3xl text-blue-900 font-semibold">{ title }</h4>
                <p className="my-2 sm:py-3 sm:text-2xl text-lg  text-gray-500 max-w-x">
                    { children }
                </p>
            </div>
            <Image
                loader={() => myLoader("600x400")}
                src={src}
                width={500} height={300}
                className="max-w-45"
            />

        </div>
    );
}
export default TextWithImage;
