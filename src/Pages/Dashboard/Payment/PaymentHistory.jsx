import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../Hooks/useCart';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PaymentHistory = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='h-full w-full px-2'>
            <SectionTitle subHeading={'pay with stripe'} heading={'payment'} />
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default PaymentHistory;
