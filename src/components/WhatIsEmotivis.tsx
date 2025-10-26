import { Sparkles, TrendingUp, Users, DollarSign, CheckCircle } from "lucide-react";
import { emotivisIcon } from '../lib/assets';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export function WhatIsEmotivis() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#0f172a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.3) 2px, rgba(6, 182, 212, 0.3) 4px)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm">ABOUT THE PLATFORM</span>
            </div>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <img 
                src={emotivisIcon} 
                alt="Emotivis Icon" 
                className="w-24 h-24 md:w-32 md:h-32"
              />
              <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl">
                What is Emotivis?
              </h2>
            </div>
          </div>

          {/* Main content card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-blue-950/50 to-indigo-950/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/30">
              {/* Description */}
              <p className="text-blue-200 text-xl leading-relaxed mb-10">
                Emotivis is an AI-powered platform that transforms workplace performance by boosting Emotional Intelligence (EI). It trains teams in empathy, communication, and engagement, solving poor customer satisfaction, low profits, and high turnover. With Emotivis, achieve up to <span className="text-cyan-400">30% higher CSAT</span>, <span className="text-cyan-400">15% more profit per star rating</span>, and <span className="text-cyan-400">40% better retention</span>, unlocking <span className="text-cyan-400">$9M in annual savings and growth</span> per 1000 employees.
              </p>

              {/* Key highlights grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 text-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-cyan-400 mb-1">30%</div>
                  <div className="text-blue-300 text-sm">Higher CSAT</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 text-center">
                  <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-blue-400 mb-1">15%</div>
                  <div className="text-blue-300 text-sm">Profit Boost</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center">
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-purple-400 mb-1">40%</div>
                  <div className="text-blue-300 text-sm">Better Retention</div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-600/10 to-cyan-600/10 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center">
                  <Sparkles className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-pink-400 mb-1">$9M</div>
                  <div className="text-blue-300 text-sm">Annual Impact</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-600/50 hover:shadow-cyan-500/70 hover:scale-105">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-white">Join the Movement</span>
                    </button>
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
                            <Label htmlFor="what-full-name" className="text-blue-200">Full Name</Label>
                            <Input id="what-full-name" placeholder="Sarah Johnson" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                          </div>
                          <div>
                            <Label htmlFor="what-email" className="text-blue-200">Email Address</Label>
                            <Input id="what-email" type="email" placeholder="sarah@company.com" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                          </div>
                          <div>
                            <Label htmlFor="what-company-name" className="text-blue-200">Company Name</Label>
                            <Input id="what-company-name" placeholder="Acme Call Center" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                          </div>
                          <div>
                            <Label htmlFor="what-employee-size" className="text-blue-200">Employee Size</Label>
                            <Select required>
                              <SelectTrigger id="what-employee-size" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                            <Label htmlFor="what-role" className="text-blue-200">Role/Title</Label>
                            <Select required>
                              <SelectTrigger id="what-role" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                  Be the first to experience the future of EI training
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
