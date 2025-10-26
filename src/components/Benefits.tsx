import { TrendingUp, DollarSign, Users, Star, Network, Sparkles, CheckCircle2, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { logoImage } from '../lib/assets';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Skyrocket Revenue",
    description: "Unlock up to $9M in annual savings and growth per 1,000 employees with 30% CSAT boosts and 15% profit increases per star rating.",
    stat: "$9M",
    statLabel: "Annual Impact",
    iconColor: "text-cyan-400",
    accentColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500/40"
  },
  {
    icon: DollarSign,
    title: "Slash Turnover Costs",
    description: "Boost team retention by 40%, saving $4M annually by reducing turnover with engaging rewards like gift cards, badges and team milestones and more!",
    stat: "$4M",
    statLabel: "Annual Savings",
    iconColor: "text-blue-400",
    accentColor: "bg-blue-500/20",
    borderColor: "border-blue-500/40"
  },
  {
    icon: Users,
    title: "Master Customer Service",
    description: "Train teams in empathy and communication to deliver exceptional experiences, increasing customer loyalty and 4-5 star ratings.",
    stat: "4-5★",
    statLabel: "Rating Target",
    iconColor: "text-purple-400",
    accentColor: "bg-purple-500/20",
    borderColor: "border-purple-500/40"
  },
  {
    icon: Star,
    title: "Enhance Business Reputation",
    description: "Earn glowing reviews on Trustpilot, Google, and BBB, strengthening your brand with AI-driven insights and top-tier service.",
    stat: "Top",
    statLabel: "Tier Reviews",
    iconColor: "text-pink-400",
    accentColor: "bg-pink-500/20",
    borderColor: "border-pink-500/40"
  },
  {
    icon: Network,
    title: "Seamless Integration",
    description: "Works with Salesforce, HubSpot, Zendesk, and 12+ platforms to streamline operations and maximize ROI.",
    stat: "12+",
    statLabel: "Integrations",
    iconColor: "text-orange-400",
    accentColor: "bg-orange-500/20",
    borderColor: "border-orange-500/40"
  }
];

export function Benefits() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#0f172a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">WHY CHOOSE US</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src={logoImage} 
              alt="Emotivis Logo" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
              Why Choose Emotivis?
            </h2>
          </div>
          
          <p className="text-blue-200 max-w-3xl mx-auto text-lg md:text-xl">
            Transform your business with AI-driven EI training that drives revenue, elevates customer service, and builds a stellar reputation.
          </p>
        </div>

        {/* Benefits List */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                
                {/* Row */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-8 bg-gradient-to-br from-blue-950/20 to-indigo-950/10 backdrop-blur-sm rounded-2xl hover:bg-blue-950/30 transition-all duration-300">
                  {/* Benefit Title with Icon */}
                  <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${benefit.accentColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-xl md:text-2xl">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-5 flex items-center">
                    <p className="text-blue-300 leading-relaxed text-base md:text-lg">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Stat */}
                  <div className="col-span-12 md:col-span-3 flex items-center justify-start md:justify-end">
                    <div className="text-left md:text-right">
                      <div className={`text-4xl md:text-5xl ${benefit.iconColor} mb-1`}>
                        {benefit.stat}
                      </div>
                      <div className="text-blue-400">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Join the Movement
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl bg-[#0f172a] border-blue-500/30 max-h-[90vh] overflow-y-auto">
              {!isSubmitted ? (
                <>
                  <DialogHeader>
                    <DialogTitle className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl">Be the First to Transform Your Workplace</DialogTitle>
                    <DialogDescription className="text-blue-200/80 text-lg">
                      Join Emotivis pre-launch and unlock AI-driven Emotional Intelligence training that boosts CSAT by 30%, profits by 15% per star rating, and retention by 40%. Sign up now to secure your spot and get exclusive early access to our Spark trial!
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                    <div>
                      <Label htmlFor="benefits-full-name" className="text-blue-200">Full Name</Label>
                      <Input id="benefits-full-name" placeholder="Sarah Johnson" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="benefits-email" className="text-blue-200">Email Address</Label>
                      <Input id="benefits-email" type="email" placeholder="sarah@company.com" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="benefits-company-name" className="text-blue-200">Company Name</Label>
                      <Input id="benefits-company-name" placeholder="Acme Call Center" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="benefits-employee-size" className="text-blue-200">Employee Size</Label>
                      <Select required>
                        <SelectTrigger id="benefits-employee-size" className="bg-[#1e293b] border-blue-500/30 text-white">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0f172a] border-blue-500/30">
                          <SelectItem value="1-50">1-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="501-2000">501-2,000</SelectItem>
                          <SelectItem value="2001+">2,001+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="benefits-role" className="text-blue-200">Role/Title</Label>
                      <Select required>
                        <SelectTrigger id="benefits-role" className="bg-[#1e293b] border-blue-500/30 text-white">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0f172a] border-blue-500/30">
                          <SelectItem value="ceo">CEO</SelectItem>
                          <SelectItem value="hr-director">HR Director</SelectItem>
                          <SelectItem value="call-center-manager">Call Center Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-lg">
                      Join the Movement
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <CheckCircle className="w-20 h-20 text-emerald-400" />
                  </div>
                  <DialogTitle className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl mb-4">Thank You!</DialogTitle>
                  <p className="text-blue-200 text-lg mb-2">Your information has been received.</p>
                  <p className="text-blue-300 text-xl">We will be in touch soon!</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
          <p className="text-blue-400 text-sm mt-4">
            Be the first to revolutionize your team's performance
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
}
