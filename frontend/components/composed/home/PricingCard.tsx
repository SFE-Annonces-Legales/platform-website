import { FunctionComponent } from "react";
// import { ShoppingCartIcon } from "@heroicons/react/solid"
import { HiShoppingCart } from 'react-icons/hi';

type PricingCardProps = {
    planName: string;
    totalPrice: number;
    totalAnn: number;
}


const PricingCard: FunctionComponent<PricingCardProps> = ({ planName, totalPrice, totalAnn }) => {
    return (

        <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-gray-500">{planName}</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">{ totalPrice / totalAnn }</span>
                <span className="text-3xl font-semibold">DH</span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">/annonce</span>
            </div>

            <ul role="list" className="my-7 space-y-5">
                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">Nombre d'annonces: {totalAnn}.</span>
                </li>
                <li className="flex space-x-3">

                    <svg className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500">Prix total du pack: {totalPrice}.</span>
                </li>
            </ul>
            <button 
                type="button" 
                className="text-white bg-blue-700 hover:bg-blue-900 border shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                    <HiShoppingCart className="w-5 h-5 mr-2 -ml-1" />
                    
                    Commander Pack
                </button>
        </div>

    );
}
export default PricingCard;