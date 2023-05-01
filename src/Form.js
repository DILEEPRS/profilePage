import React, { useState } from "react";

let Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    "Bio Description": "",
    "Email address": "",
    "Phone number": "",
    "Address 1": "",
    "Address 2": "",
    City: "",
    State: "",
    Country: "",
    Zipcode: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col  md:flex-row items-center ">
      <div className="w-[30%] flex flex-col gap-3 ml-5 ">
        <img
          className="w-[96px] h-[96px] items-center  "
          src="https://signup.com/mobileweb/2.0/images/build/mobile-organizers.png"
          alt="alt"
        />
        <label htmlFor="profile-photo-input" class="custom-file-upload">
          Upload Profile Photo
        </label>
        <input
          className="hidden"
          id="profile-photo-input"
          type="file"
          name="profile-photo"
          accept="image/*"
        ></input>
        <span
          type="text"
          className=" border  border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg w-[240px]    "
        >
          <img
            className="w-[30px] h-[30px] p-[4px] "
            src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-1464523-1239437.png?f=avif&w=256"
            alt="fac"
          ></img>
        </span>
        <span className="border  border-gray-30 bg-gray-50 text-gray-900 text-sm rounded-lg w-[240px]   ">
          <img
            className="w-[30px] h-[30px] p-[4px]"
            src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-1464537-1239448.png?f=avif&w=256"
            alt="fac"
          ></img>
        </span>
        <span className="border  border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg w-[240px]  ">
          <img
            className="w-[30px] h-[30px] p-[4px]"
            src="https://cdn.iconscout.com/icon/free/png-512/free-social-137-95498.png?f=avif&w=256"
            alt="fac"
          ></img>
        </span>
      </div>
      <div className="w-[70%] sm:flex   ">
        <form onSubmit={handleSubmit}>
          <div className="my-[20px] mx-[5px]   ">
            <div>
              <div className="flex flex-col  md:flex-row gap-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="bg-gray-50 border w-[280px]  border-gray-300 text-gray-900 text-sm rounded-lg   p-2.5  "
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 w-[280px]  text-sm font-medium text-gray-900 "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="bg-gray-50 border w-[280px] border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5   "
                    placeholder="David"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Bio Description"
                  className="block mb-2 text-sm   font-medium text-gray-900 "
                >
                  Bio Description
                </label>
                <input
                  type="text"
                  id="Bio Description"
                  className="bg-gray-50 border w-[280px]  border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 md:w-[568px] "
                  placeholder="Message"
                  value={formData["Bio Description"]}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col  md:flex-row gap-2">
                <div>
                  <label
                    htmlFor="Email address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="Email address"
                    className="bg-gray-50 border w-[280px]  border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 "
                    placeholder="Enter your email"
                    value={formData["Email address"]}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Phone number"
                    className="block mb-2 w-[280px]  text-sm font-medium text-gray-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="Phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 w-[280px]"
                    placeholder="Enter your number"
                    value={formData["phone number"]}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col  md:flex-row gap-2">
                <div>
                  <label
                    htmlFor="Address 1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    id="Address 1"
                    className="bg-gray-50 border w-[280px]  border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 "
                    value={formData["Address 1"]}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="Address 2"
                    className="block mb-2 w-[280px]  text-sm font-medium text-gray-900 "
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    id="Address 2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-[280px] p-2.5"
                    value={formData["Address 2"]}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex flex-row gap-2 ">
                  <div>
                    <label
                      htmlFor="City"
                      className="block mb-2   text-sm font-medium text-gray-900 py-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="City"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[135px]  p-2.5"
                      value={formData["City"]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Country"
                      className="block mb-2   text-sm font-medium text-gray-900  py-1"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="Country"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 w-[135px] "
                      value={formData["Country"]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div>
                    <label
                      htmlFor="State"
                      className="block mb-2   text-sm font-medium text-gray-900  py-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="State"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5  w-[135px] "
                      value={formData["State"]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Zipcode"
                      className="block mb-2   text-sm font-medium text-gray-900  py-1"
                    >
                      Zipcode
                    </label>
                    <input
                      type="text"
                      id="Zipcode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 w-[135px]  "
                      value={formData["Zipcode"]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="bg-violet-700 px-3 py-[1] text-white rounded-lg m-3"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button className=" px-3 py-[1] text-black rounded-lg m-3 border border-1 ">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
