import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { assets } from "../assets";
import { RiCloseCircleFill } from "react-icons/ri";

const Product = ({ closeModal }) => {
  const differentSize = [
    {
      name: "8 litres",
      price: 14730000,
    },
    {
      name: "12 litres",
      price: 17288100,
    },
    {
      name: "AA Battery",
      price: 260000,
    },
  ];
  const publicKey = "pk_live_324ed20cd07c4121ca9cc2b77ae20685d1b59482";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState({});

  const [componentProps, setComponentProps] = useState({});

  useEffect(() => {
    if (size.name) {
      setComponentProps({
        email,
        amount: size.price * quantity,
        metadata: {
          cart_id: 398,
          custom_fields: [
            {
              display_name: "Customer' Name",
              variable_name: name,
              value: name,
            },
            {
              display_name: "Phone Number",
              variable_name: phone,
              value: phone,
            },
            {
              display_name: "Address",
              variable_name: address,
              value: address,
            },
            {
              display_name: "Quantity",
              variable_name: quantity,
              value: quantity,
            },
            {
              display_name: "Size",
              variable_name: size,
              value: size,
            },
          ],
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
    <div className="bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-[100%] h-full z-10 flex items-center justify-between flex-col overflow-auto py-4">
      <div className="bg-white flex items-center md:items-start justify-center md:relative md:top-10 w-full md:w-[80%] gap-8 py-4 md:py-8 px-4 rounded-2xl flex-col  md:flex-row md:justify-around">
        <div className="item">
          <img src={assets.twin} width={200} />
          <img src={assets.battery} width={200} />
        </div>
        <div className="flex items-start md:items-center flex-col">
          <div className="flex items-start flex-col">
            <h5 className="font-light text-gray-400 text-xl">
              ColorPop Smart Sensor Bin
            </h5>
            <h2 className="font-bold text-3xl mb-2 text-black">
              Limited Edition
            </h2>
            <div className="flex items-start lg:items-center gap-4 mb-3 flex-col lg:flex-row">
              <p className="bg-orange-500 px-2 py-1 text-lg text-white">
                Price Alert
              </p>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-black text-2xl font-light">8L:</p>
                  <p className="line-through text-gray-400 text-2xl font-light">
                    ₦174,999
                  </p>
                  <b className="text-black">||</b>
                  <p className="text-green-800 font-bold text-3xl">₦147,300</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-black text-2xl font-light">12L:</p>
                  <p className="line-through text-gray-400 text-2xl font-light">
                    ₦199,999
                  </p>
                  <b className="text-black">||</b>
                  <p className="text-green-800 font-bold text-3xl">₦172,881</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-black text-2xl font-light">
                    AA Batteries:
                  </p>
                  <p className="line-through text-gray-400 text-2xl font-light">
                    ₦2,850
                  </p>
                  <b className="text-black">||</b>
                  <p className="text-green-800 font-bold text-3xl">₦2,600</p>
                </div>
              </div>
            </div>
          </div>
          <form className="flex items-start justify-center flex-col">
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black text-[20px]">Name:</label>
              <input
                type="text"
                id="name"
                className="outline-none focus:outline-none px-4 w-full border-gray-700 border-b-2 text-black"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black text-[20px]">Email:</label>
              <input
                type="text"
                id="email"
                className="outline-none focus:outline-none px-4 w-full border-gray-700 border-b-2 text-black"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black text-[20px]">Phone:</label>
              <input
                type="text"
                id="phone"
                className="outline-none focus:outline-none px-4 w-full border-gray-700 border-b-2 text-black"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black text-[20px]">Address:</label>
              <input
                type="text"
                id="phone"
                className="outline-none focus:outline-none px-4 w-full border-gray-700 border-b-2 text-black"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6">
              <label className="text-black text-[20px]">Qty:</label>
              <input
                type="number"
                id="quantity"
                className="outline-none focus:outline-none px-4 border-gray-700 w-full border-b-2 text-black"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center mt-2 gap-6 relative">
              <label className="text-black text-[20px]">Product</label>
              <select
                className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => handleSelect(e.target.value)}
              >
                {differentSize.map((item, index) => (
                  <option
                    key={index}
                    id="size"
                    className="outline-none
                focus:outline-none px-2 mr-3 py-1 w-full border-b-2 text-black"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
            className="px-6 py-4 bg-green-700 text-white mt-6 mx-auto flex items-center justify-center"
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
