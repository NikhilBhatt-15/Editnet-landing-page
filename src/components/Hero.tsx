import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Connect.
                <br />
                <span className="text-yellow-400">Edit.</span>
                <br />
                Succeed.
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                The premier platform where professional editors and clients
                meet. Skip the agencies, avoid the markups, and build direct
                relationships that drive exceptional results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-black hover:bg-gray-800 hover:text-amber-50 text-lg px-8 py-6"
              >
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-yellow-400">10K+</div>
                <div className="text-sm text-gray-400">Active Editors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1">
              <div className="bg-black rounded-xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-gray-400">Video Editor</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-300">
                      Project: Marketing Video
                    </div>
                    <div className="text-yellow-400 font-semibold">$2,500</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-gray-300">
                      Project: Documentary Edit
                    </div>
                    <div className="text-yellow-400 font-semibold">$4,200</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    This Month&apos;s Earnings
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">
                    $12,850
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
