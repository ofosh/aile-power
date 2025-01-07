import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { assets } from "../assets";
import { RiCloseCircleFill } from "react-icons/ri";

const Product = ({ closeModal }) => {
  const publicKey = "pk_test_90b1c0931cbdd706807236447368e8b853db899a";
  const amount = 13200000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(0);

  const componentProps = {
    email,
    amount: amount * quantity,
    metadata: {
      name,
      phone,
    },
    publicKey,

    text: "Proceed to Pay",
  };

  return (
    <div className="bg-opacity-30 backdrop-blur-md fixed top-0 left-0 w-[100%] h-full z-100 flex mt-8 items-center justify-between flex-col overflow-auto py-4">
      <div className="bg-white flex items-center md:items-start justify-center md:relative md:top-10 w-full md:w-[80%] gap-8 py-4 md:py-8 px-4 rounded-2xl flex-col  md:flex-row md:between">
        <div className="item">
          <img src={assets.twin} width={300} />
        </div>
        <div className="flex items-start md:items-center flex-col">
          <div className="flex items-start flex-col">
            <h5 className="font-light text-gray-400 text-xl">
              ColorPop Smart Sensor Bin
            </h5>
            <h2 className="font-bold text-3xl mb-2 text-black">
              Limited Edition
            </h2>
            <div className="flex items-center gap-4 mb-3">
              <p className="line-through text-gray-400 text-2xl font-light">
                ₦145,000
              </p>
              <p className="text-green-800 font-bold text-3xl">₦132,000</p>
              <p className="bg-orange-500 px-2 py-1 text-lg text-white">
                Early Bird Offer
              </p>
            </div>
          </div>
          <form className="flex items-center justify-center flex-col">
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black">Name</label>
              <input
                type="text"
                id="name"
                className="outline-none focus:outline-none px-2 py-2 w-full border-b-2 text-black"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black">Email</label>
              <input
                type="text"
                id="email"
                className="outline-none focus:outline-none px-2 py-2 w-full border-b-2 text-black"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black">Phone</label>
              <input
                type="text"
                id="phone"
                className="outline-none focus:outline-none px-2 py-2 w-full border-b-2 text-black"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black">Quantity</label>
              <input
                type="number"
                id="quantity"
                className="outline-none focus:outline-none px-2 py-1  w-full border-b-2 text-black"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton
            {...componentProps}
            className="px-6 py-4 bg-green-700 text-white mt-4 mx-auto flex items-center justify-center"
          />
        </div>
        <RiCloseCircleFill
          className="cursor-pointer flex items-end justify-end text-6xl text-black mt-3 "
          onClick={() => closeModal(false)}
        />
      </div>
    </div>
  );
};

export default Product;
