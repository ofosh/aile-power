import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { assets } from "../assets";
import { RiCloseCircleFill } from "react-icons/ri";

const Product = ({ closeModal }) => {
  const differentSize = [
    {
      name: "8 litres",
      price: 120000000,
    },
    {
      name: "12 litres",
      price: 140000000,
    },
  ];
  const publicKey = "pk_live_324ed20cd07c4121ca9cc2b77ae20685d1b59482";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState({});

  const [componentProps, setComponentProps] = useState({});

  useEffect(() => {
    if (size.name) {
      setComponentProps({
        email,
        amount: size.price * quantity,
        metadata: {
          name,
          phone,
        },
        publicKey,
        size,

        text: "Proceed to Pay",
      });
    }
  }, [size, quantity]);

  const handleSelect = function (item) {
    const currSize = differentSize.find((val) => {
      return val.name == item;
    });
    setSize(currSize);
  };

  return (
    <div className="bg-opacity-30 backdrop-blur-md fixed top-0 left-0 w-[100%] h-full z-10 flex mt-8 items-center justify-between flex-col overflow-auto py-4">
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
              {/* <p className="line-through text-gray-400 text-2xl font-light">
                ₦145,000
              </p>
              <p className="text-green-800 font-bold text-3xl">₦132,000</p> */}
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
            <div className="flex justify-center items-center mt-2 gap-6 relative">
              <label className="text-black">Size</label>
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => handleSelect(e.target.value)}
              >
                {differentSize.map((item, index) => (
                  <option
                    key={index}
                    id="size"
                    className="outline-none
                focus:outline-none px-2 py-1 w-full border-b-2 text-black"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
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
