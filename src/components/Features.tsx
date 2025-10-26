import { Sparkles, CheckCircle, Activity, BookOpen, Gift, TrendingUp, Zap, Users } from "lucide-react";
import { Button } from "./ui/button";
import { logoImage } from '../lib/assets';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

// Helper functions for gradient colors
const getGlowColor = (color: string) => {
  const colors = {
    cyan: 'rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4)',
    blue: 'rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4)',
    purple: 'rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.4)',
    pink: 'rgba(236, 72, 153, 0.4), rgba(251, 146, 60, 0.4)',
    orange: 'rgba(251, 146, 60, 0.4), rgba(6, 182, 212, 0.4)',
    yellow: 'rgba(234, 179, 8, 0.4), rgba(34, 197, 94, 0.4)'
  };
  return colors[color as keyof typeof colors] || colors.cyan;
};

const getStartColor = (color: string) => {
  const colors = {
    cyan: '#06b6d4',
    blue: '#3b82f6',
    purple: '#8b5cf6',
    pink: '#ec4899',
    orange: '#fb923c',
    yellow: '#eab308'
  };
  return colors[color as keyof typeof colors] || colors.cyan;
};

const getEndColor = (color: string) => {
  const colors = {
    cyan: '#3b82f6',
    blue: '#8b5cf6',
    purple: '#ec4899',
    pink: '#fb923c',
    orange: '#06b6d4',
    yellow: '#22c55e'
  };
  return colors[color as keyof typeof colors] || colors.cyan;
};

const features = [
  {
    icon: Activity,
    title: "AI-Powered EI Tracking",
    description: "Monitor empathy, communication, and engagement in real-time to boost CSAT by 30%.",
    gradient: "from-cyan-600/20 to-blue-600/20",
    iconColor: "from-cyan-400 to-blue-400",
    borderColor: "border-cyan-500/30",
    glowColor: "cyan"
  },
  {
    icon: BookOpen,
    title: "Tailored Training Lessons",
    description: "Access 5-10 interactive lessons (via Vimeo) to improve EI skills fast.",
    gradient: "from-blue-600/20 to-purple-600/20",
    iconColor: "from-blue-400 to-purple-400",
    borderColor: "border-blue-500/30",
    glowColor: "blue"
  },
  {
    icon: Gift,
    title: "Engaging Rewards",
    description: "Motivate teams with gift cards, charity donations, wellness perks, and Elevate's free branded mug.",
    gradient: "from-purple-600/20 to-pink-600/20",
    iconColor: "from-purple-400 to-pink-400",
    borderColor: "border-purple-500/30",
    glowColor: "purple"
  },
  {
    icon: TrendingUp,
    title: "Actionable Analytics",
    description: "Gain insights into team performance with Elevate's predictive ROI tools.",
    gradient: "from-pink-600/20 to-orange-600/20",
    iconColor: "from-pink-400 to-orange-400",
    borderColor: "border-pink-500/30",
    glowColor: "pink"
  },
  {
    icon: Zap,
    title: "Seamless Integrations",
    description: "Sync with Salesforce, HubSpot, Zendesk, Dialpad, and 12+ platforms for effortless workflows.",
    gradient: "from-orange-600/20 to-cyan-600/20",
    iconColor: "from-orange-400 to-cyan-400",
    borderColor: "border-orange-500/30",
    glowColor: "orange"
  },
  {
    icon: Users,
    title: "Team Motivation",
    description: "Celebrate with badges, milestones, and Employee of the Month awards to drive 40% better retention.",
    gradient: "from-yellow-600/20 to-green-600/20",
    iconColor: "from-yellow-400 to-green-400",
    borderColor: "border-yellow-500/30",
    glowColor: "yellow"
  }
];

export function Features() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0a0e27] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.3) 2px, rgba(6, 182, 212, 0.3) 4px)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">KEY FEATURES</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src={logoImage} 
              alt="Emotivis Logo" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
              Unleash Your Team's Potential with Emotivis
            </h2>
          </div>
          
          <p className="text-blue-200 max-w-3xl mx-auto text-lg md:text-xl">
            Discover powerful AI-driven tools to transform customer service and workplace performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${feature.gradient} backdrop-blur-xl rounded-2xl p-8 border ${feature.borderColor} hover:border-opacity-70 transition-all duration-300 h-full`}>
                {/* Futuristic Icon */}
                <div className="mb-6 relative w-fit">
                  {/* Animated glow effect */}
                  <div 
                    className="absolute -inset-4 opacity-30 blur-2xl rounded-full group-hover:opacity-50 transition-opacity duration-500 animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${getGlowColor(feature.glowColor)})`
                    }}
                  />
                  
                  {/* Icon container */}
                  <div className="relative">
                    {/* Hexagonal container effect */}
                    <div className={`relative w-28 h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} border-2 ${feature.borderColor} group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 shadow-2xl`}>
                      {/* Inner gradient overlay */}
                      <div 
                        className="absolute inset-3 rounded-xl opacity-20 blur-sm"
                        style={{
                          background: `linear-gradient(135deg, ${getGlowColor(feature.glowColor)})`
                        }}
                      />
                      
                      {/* Icon with custom gradient */}
                      <div className="relative z-10">
                        <feature.icon 
                          className="w-14 h-14" 
                          strokeWidth={1.5}
                          style={{
                            stroke: `url(#gradient-${index})`,
                            filter: 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.5))'
                          }}
                        />
                        <svg width="0" height="0" className="absolute">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={getStartColor(feature.glowColor)} />
                              <stop offset="100%" stopColor={getEndColor(feature.glowColor)} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      
                      {/* Animated corner accents */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-pulse" />
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-blue-100 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
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
                      <Label htmlFor="features-full-name" className="text-blue-200">Full Name</Label>
                      <Input id="features-full-name" placeholder="Sarah Johnson" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="features-email" className="text-blue-200">Email Address</Label>
                      <Input id="features-email" type="email" placeholder="sarah@company.com" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="features-company-name" className="text-blue-200">Company Name</Label>
                      <Input id="features-company-name" placeholder="Acme Call Center" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="features-employee-size" className="text-blue-200">Employee Size</Label>
                      <Select required>
                        <SelectTrigger id="features-employee-size" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                      <Label htmlFor="features-role" className="text-blue-200">Role/Title</Label>
                      <Select required>
                        <SelectTrigger id="features-role" className="bg-[#1e293b] border-blue-500/30 text-white">
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
            Be the first to revolutionize workplace performance
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
    </section>
  );
}
