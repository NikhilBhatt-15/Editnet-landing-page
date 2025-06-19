import { Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Video Editor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "Editnet changed my freelance career. I&apos;ve tripled my income and work with amazing clients who truly value my expertise.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Content Creator",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "Finding quality editors used to be a nightmare. Editnet&apos;s matching system connected me with the perfect editor in hours, not weeks.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Documentary Producer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "The direct communication and secure payment system gives me confidence in every project. No more chasing invoices or dealing with agencies.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-30 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            What Our Community <span className="text-yellow-400">Says</span>
          </h2>
          <p className="text-xl text-gray-300">
            Don&apos;t just take our word for it. Here&apos;s what editors and
            clients love about Editnet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
