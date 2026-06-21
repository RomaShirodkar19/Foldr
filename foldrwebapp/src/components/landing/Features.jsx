import { features } from "../../assets/data";

import {
  Upload,
  Shield,
  Share2,
  Wallet,
  FolderOpen,
  History,
} from "lucide-react";

const iconMap = {
  Upload,
  Shield,
  Share2,
  Wallet,
  FolderOpen,
  History,
};

const Features = () => {
  return (
    <div className="features-section bg-[#24B1B1] py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            A Better Way to Manage Your Files
          </h2>

          <p className="mt-4 text-lg text-slate-950 max-w-2xl mx-auto">
            From secure storage to seamless organization, Foldr simplifies your
            digital workflow.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.iconName];

              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6 bg-[#FFF0E4] p-3 rounded-xl shadow-md">
                    <Icon
                      size={24}
                      className={feature.iconColour}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-black mt-6">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;