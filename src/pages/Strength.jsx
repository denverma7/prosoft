import React from "react";
import ServiceAdvantages1 from "../components/ourStrength/ServiceAdvantages1";
import ServiceAdvantages2 from "../components/ourStrength/ServiceAdvantages2";
import FieldManagement from "../components/ourStrength/FieldManagement";
import CallCenter from "../components/ourStrength/CallCenter";
import DataCollection from "../components/ourStrength/DataCollection";
import OnlineCommunity from "../components/ourStrength/OnlineCommunity";

const Strength = () => {
  return (
    <div>
      <ServiceAdvantages1 />
      <ServiceAdvantages2 />
      <FieldManagement />
      <CallCenter />
      <OnlineCommunity />
      <DataCollection />
    </div>
  );
};

export default Strength;
