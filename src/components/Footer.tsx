import { Button } from "./ui/button";
import { Mail, CheckCircle, Upload } from "lucide-react";
import { logoImage } from '../lib/assets';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCareerSubmitted, setIsCareerSubmitted] = useState(false);
  return (
    <footer className="bg-[#0a0e27] text-white py-16 border-t border-blue-500/30 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/30 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img src={logoImage} alt="Emotivis Logo" className="w-16 h-16 mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
            <p className="text-blue-200">
              Transform your team with AI-powered emotional intelligence training.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cyan-300 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features" 
                  className="text-blue-300 hover:text-cyan-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-blue-300 hover:text-cyan-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-cyan-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-blue-300 hover:text-cyan-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-blue-300 hover:text-cyan-300 transition-colors text-left">
                      Careers
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-[#0f172a] border-blue-500/30 max-h-[90vh] overflow-y-auto">
                    {!isCareerSubmitted ? (
                      <>
                        <DialogHeader>
                          <DialogTitle className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl">
                            Join Our Sales Revolution
                          </DialogTitle>
                          <DialogDescription className="text-blue-300 leading-relaxed mt-4">
                            Be a part of Emotivis' mission to transform workplaces with AI-driven Emotional Intelligence training. As a Sales Representative, you'll sell a game-changing platform that boosts customer satisfaction and revenue, earning uncapped commissions with the potential to make $28K in 6 months and $61K in your first year. Enjoy flexible work, a dynamic team, and the chance to grow with a company targeting $60M in revenue by 2029. Apply now to drive impact!
                          </DialogDescription>
                        </DialogHeader>
                        <form className="space-y-4 mt-6" onSubmit={(e) => { e.preventDefault(); setIsCareerSubmitted(true); }}>
                          <div>
                            <Label htmlFor="career-name" className="text-blue-200">Full Name *</Label>
                            <Input 
                              id="career-name" 
                              placeholder="John Smith" 
                              className="bg-[#1e293b] border-blue-500/30 text-white" 
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="career-email" className="text-blue-200">Email Address *</Label>
                            <Input 
                              id="career-email" 
                              type="email" 
                              placeholder="john@example.com" 
                              className="bg-[#1e293b] border-blue-500/30 text-white" 
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="career-phone" className="text-blue-200">Phone Number *</Label>
                            <Input 
                              id="career-phone" 
                              type="tel" 
                              placeholder="(555) 123-4567" 
                              className="bg-[#1e293b] border-blue-500/30 text-white" 
                              required 
                            />
                          </div>
                          <div>
                            <Label htmlFor="career-resume" className="text-blue-200">Upload Resume (Optional)</Label>
                            <div className="relative">
                              <Input 
                                id="career-resume" 
                                type="file" 
                                accept=".pdf,.doc,.docx"
                                className="bg-[#1e293b] border-blue-500/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-500 file:cursor-pointer" 
                              />
                            </div>
                            <p className="text-blue-400 text-xs mt-2">Accepted formats: PDF, DOC, DOCX</p>
                          </div>
                          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <p className="text-blue-200 text-sm flex items-start gap-2">
                              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>You can also email your resume directly to <a href="mailto:careers@emotivis.com" className="text-cyan-400 hover:text-cyan-300 underline">careers@emotivis.com</a></span>
                            </p>
                          </div>
                          <Button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-lg"
                          >
                            Apply Today
                          </Button>
                        </form>
                      </>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="mb-6 flex justify-center">
                          <CheckCircle className="w-20 h-20 text-emerald-400" />
                        </div>
                        <DialogTitle className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl md:text-3xl mb-4">Application Received!</DialogTitle>
                        <p className="text-blue-200 text-lg mb-2">Thank you for your interest in joining Emotivis.</p>
                        <p className="text-blue-300 text-xl">We will be in touch soon!</p>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cyan-300 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@emotivis.com" 
                  className="flex items-center gap-2 text-blue-300 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@emotivis.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-cyan-300 mb-4">Get Started</h4>
            <p className="text-blue-200 mb-4">
              Be the first to experience the future of workplace performance.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
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
                        <Label htmlFor="footer-full-name" className="text-blue-200">Full Name</Label>
                        <Input id="footer-full-name" placeholder="Sarah Johnson" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                      </div>
                      <div>
                        <Label htmlFor="footer-email" className="text-blue-200">Email Address</Label>
                        <Input id="footer-email" type="email" placeholder="sarah@company.com" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                      </div>
                      <div>
                        <Label htmlFor="footer-company-name" className="text-blue-200">Company Name</Label>
                        <Input id="footer-company-name" placeholder="Acme Call Center" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                      </div>
                      <div>
                        <Label htmlFor="footer-employee-size" className="text-blue-200">Employee Size</Label>
                        <Select required>
                          <SelectTrigger id="footer-employee-size" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                        <Label htmlFor="footer-role" className="text-blue-200">Role/Title</Label>
                        <Select required>
                          <SelectTrigger id="footer-role" className="bg-[#1e293b] border-blue-500/30 text-white">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-400 text-sm">
              © 2025 Emotivis. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-blue-400 hover:text-cyan-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-400 hover:text-cyan-300 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
