import React from "react";
import user from "../../../assets/459809096_1213306209810555_1832615970736443789_n.jpg";
import { FaEdit } from "react-icons/fa";
import { useUser } from "../../../contexts/AuthContext";


const MyProfile = () => {
  const {user}= useUser();
  console.log(user.user);
  return (
    <div className="h-full p-3 ml-5 mr-5 space-y-2 w-ful border-4 rounded-lg border-[#DFE2E7] bg-white flex justify-between text-black">
      <div className="flex items-center p-2 space-x-4">
        <img
          src={user.user.profile_picture_url}
          alt=""
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.user.first_name} {user.user.last_name}</h2>
          <h2 className="text-sm font-semibold">Profile Type : {user.user.user_type} </h2>
          <h2 className="text-sm font-semibold">Register Date : {user.user.joined_at}</h2>
        </div>
      </div>
      <div>
        <button className="p-2"
        htmlFor="order-modal"
        >
        <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
<label 
 
onClick={() => setSingleCategories(singleItem)}
>Order Now</label>
