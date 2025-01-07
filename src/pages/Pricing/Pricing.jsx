import React from "react";
import SinglePackage from "../../components/Single-Package/SinglePackage";
import { useLoaderData } from "react-router-dom";

const Pricing = () => {
  const prices = useLoaderData();
  console.log(prices)
  return (
    <div>
      <section className="py-20 bg-gray-100 text-[#21304E]">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="text-4xl font-bold lg:text-5xl">Pricing</span>
            <h2 className="text-3xl text-[#21304E] font-bold lg:text-4xl">
              Choose your best plan
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {prices.data.map((pricer) => (
              <SinglePackage key={pricer.id} priced={pricer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
