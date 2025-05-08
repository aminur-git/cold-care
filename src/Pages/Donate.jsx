import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const Donate = () => {
const {id} = useParams()
const currentId = parseInt(id)
const {campaigns} = useContext(AuthContext)

const campaign = campaigns.find((campaign) => campaign.id == currentId);
console.log(campaign)
   

  return (
    <div>
      <div className="bg-[#0095c3f3] ">
        <Navbar></Navbar>
      </div>
      <div className="mt-10">


      </div>
    </div>
  );
};

export default Donate;
