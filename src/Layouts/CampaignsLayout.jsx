import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Campaign from "../Components/CampaignCard";
import CampaignCard from "../Components/CampaignCard";

const CampaignsLayout = () => {
  const { campaigns } = useContext(AuthContext);
  console.log(campaigns);
  return (
    <div>
        <h1 className="text-center text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-200 my-10">Donation Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {campaigns.map((campaign, idx) => (
          <CampaignCard key={idx} campaign={campaign}></CampaignCard>
        ))}
      </div>
    </div>
  );
};

export default CampaignsLayout;
