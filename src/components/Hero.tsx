import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Star, Shield, Award, TrendingUp, DollarSign, Users, CheckCircle } from "lucide-react";
import { logoImage, trustpilotImage, bbbImage, googleImage } from '../lib/assets';
import { useState } from "react";

export function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e27]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Logo in top-left corner */}
      <div className="absolute top-8 left-8 z-20">
        <img src={logoImage} alt="Emotivis Logo" className="w-32 h-32 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          
          <h1 className="text-white mb-8 text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Transform Your Team with AI-Powered Emotional Intelligence
          </h1>
          
          <p className="text-blue-200/90 mb-12 max-w-3xl mx-auto text-xl md:text-2xl">
            The Future of Workplace Performance is Here
          </p>

          {/* Key Stats - Emphasizing Revenue Potential */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <div className="text-5xl text-cyan-300 mb-2">+30%</div>
              <div className="text-blue-200">CSAT Increase</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-900/50 to-green-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all">
              <DollarSign className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <div className="text-5xl text-emerald-300 mb-2">+15%</div>
              <div className="text-blue-200">Profit per Rating Star</div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/30 hover:border-violet-400/50 transition-all">
              <Users className="w-12 h-12 text-violet-400 mx-auto mb-3" />
              <div className="text-5xl text-violet-300 mb-2">+40%</div>
              <div className="text-blue-200">Team Retention</div>
            </div>
          </div>

          {/* Revenue Potential Highlight */}
          <div className="mb-10 p-8 bg-gradient-to-r from-yellow-900/30 via-orange-900/30 to-yellow-900/30 backdrop-blur-sm rounded-2xl border border-yellow-500/40 max-w-3xl mx-auto">
            <div className="text-yellow-300 text-2xl mb-2">Revenue Impact (1,000 Employees)</div>
            <div className="text-6xl text-yellow-400 mb-2">$9M</div>
            <div className="text-blue-200 text-xl">Annual Revenue Growth</div>
          </div>

          {/* CTA Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-12 py-8 text-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] border-2 border-blue-400/50"
              >
                <span className="mr-2">🚀</span>
                JOIN THE MOVEMENT
                <span className="ml-2">🚀</span>
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
                      <Label htmlFor="hero-full-name" className="text-blue-200">Full Name</Label>
                      <Input id="hero-full-name" placeholder="Sarah Johnson" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="hero-email" className="text-blue-200">Email Address</Label>
                      <Input id="hero-email" type="email" placeholder="sarah@company.com" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="hero-company-name" className="text-blue-200">Company Name</Label>
                      <Input id="hero-company-name" placeholder="Acme Call Center" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                    </div>
                    <div>
                      <Label htmlFor="hero-employee-size" className="text-blue-200">Employee Size</Label>
                      <Select required>
                        <SelectTrigger id="hero-employee-size" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                      <Label htmlFor="hero-role" className="text-blue-200">Role/Title</Label>
                      <Select required>
                        <SelectTrigger id="hero-role" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-lg">
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

          <div className="mt-6 text-blue-300 text-xl">
            💳 No Credit Card Required • ⚡ Instant Access • 🎯 Cancel Anytime
          </div>

          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <img src={trustpilotImage} alt="Trustpilot" className="h-16 object-contain" />
            <img src={bbbImage} alt="BBB Accredited Business" className="h-16 object-contain" />
            <img src={googleImage} alt="Google Reviews" className="h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scan" />
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
