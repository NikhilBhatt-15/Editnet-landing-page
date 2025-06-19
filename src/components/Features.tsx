import { Users, Shield, Zap, DollarSign, Clock, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Direct Connections",
      description:
        "Connect directly with clients without middlemen or agency fees eating into your profits.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Escrow-protected payments ensure you get paid on time, every time, with full transaction security.",
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description:
        "Our AI-powered matching system connects you with clients that perfectly fit your skills and style.",
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description:
        "Set your own rates and keep more of what you earn with our transparent, low-fee structure.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Work when you want, how you want. Take on projects that fit your schedule and lifestyle.",
    },
    {
      icon: Star,
      title: "Build Your Brand",
      description:
        "Showcase your portfolio, collect reviews, and build a reputation that drives premium opportunities.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white font-bold mb-4">
            Why Choose <span className="text-yellow-400">Editnet</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;ve built the platform editors and clients have been waiting
            for. No more compromises, no more headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-400 transition-colors text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
