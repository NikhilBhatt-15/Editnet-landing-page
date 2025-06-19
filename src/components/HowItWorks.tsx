import { UserPlus, Search, Handshake, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description:
        "Sign up and showcase your skills, portfolio, and experience to stand out from the crowd.",
    },
    {
      icon: Search,
      title: "Find Perfect Matches",
      description:
        "Browse projects or let our smart matching system connect you with ideal clients automatically.",
    },
    {
      icon: Handshake,
      title: "Collaborate & Deliver",
      description:
        "Work directly with clients using our built-in communication and project management tools.",
    },
    {
      icon: CheckCircle,
      title: "Get Paid Securely",
      description:
        "Receive secure payments through our escrow system and build long-term client relationships.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-30 px-4 sm:px-6 lg:px-8 bg-black/90 h-100vh"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            How <span className="text-yellow-400">Editnet</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started is simple. From profile creation to getting paid,
            we&apos;ve streamlined every step of the process.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-400">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
