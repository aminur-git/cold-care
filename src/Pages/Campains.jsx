import React from "react";
import Navbar from "../Components/Navbar";
import CampaignsLayout from "../Layouts/CampaignsLayout";

const Campains = () => {
  return (
    <div>
      <header className="bg-[#0095c3f3] ">
        <Navbar></Navbar>
      </header>
      <main className="mt-3 max-w-11/12 mx-auto">
        <CampaignsLayout></CampaignsLayout>
      </main>
    </div>
  );
};

export default Campains;
