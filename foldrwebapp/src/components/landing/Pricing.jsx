import { pricingPlans } from "../../assets/data";

const Pricing = ({ openSignUp }) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" pricing-header-text text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plans for Every Need
          </h2>
          <p className="mt-4 text-lg leading-6 text-black-600">
            Choose the plan that best fits your requirements and start enjoying
            the benefits of our service today.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                bg-[#FFF0E4]
                border border-[#007979]
                p-8
                shadow-lg
                transition-all
                duration-300
                ease-out
                hover:-translate-y-3
                hover:scale-[1.03]
                hover:border-[#24B1B1]
                hover:shadow-[0_0_20px_rgba(36,177,177,0.25),0_0_50px_rgba(36,177,177,0.15)]
                "
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-2 text-gray-600">{plan.description}</p>

              <p className="mt-6 text-4xl font-bold">₹{plan.price}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button 
                className="mt-8 w-full rounded-lg bg-[#007979] px-4 py-3 text-white cursor-pointer"
                onClick={() => openSignUp()}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
