import React from 'react';
import { useForm } from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './BookingProcess.css';

const BookingProcess = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const history = useHistory();
  const onSubmit = data => {
    //   console.log(data)
    // getStoredCart e data joma hobe. er jonne page not found dekhasse.
    fetch('https://howling-skeleton-40428.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
        if(result.insertedId){
            history.push('/myOrder')
        }

    })


};
    return (
        <div className="margin-top form-style">
            <h2>Please Enter Your Information</h2>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Your Address" defaultValue="" {...register("address")} />
                <input placeholder="Your City" defaultValue="" {...register("city")} />
                <input placeholder="Your Phone Number" defaultValue="" {...register("phone")} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default BookingProcess;