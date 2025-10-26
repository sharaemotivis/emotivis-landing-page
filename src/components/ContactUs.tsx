import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { logoImage } from '../lib/assets';

export function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0f172a] to-[#0a0e27] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">GET IN TOUCH</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src={logoImage} 
              alt="Emotivis Logo" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
              Have More Questions?
            </h2>
          </div>
          
          <p className="text-blue-200 max-w-3xl mx-auto text-lg md:text-xl mb-8">
            We're here to help! Reach out to our team and we'll get back to you as soon as possible.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-[#0f172a] border-blue-500/30">
              <DialogHeader>
                <DialogTitle className="text-blue-100 text-2xl">Contact Our Team</DialogTitle>
                <DialogDescription className="text-blue-300">
                  Fill out the form below and we'll respond within 24 hours
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="contact-name" className="text-blue-200">Full Name *</Label>
                  <Input 
                    id="contact-name" 
                    placeholder="John Doe" 
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-blue-200">Email *</Label>
                  <Input 
                    id="contact-email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact-note" className="text-blue-200">Message (Optional)</Label>
                  <Textarea 
                    id="contact-note" 
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 py-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <p className="text-sm text-blue-400 text-center">
                  Or email us directly at{" "}
                  <a href="mailto:support@emotivis.com" className="text-cyan-400 hover:underline">
                    support@emotivis.com
                  </a>
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-950/20 to-indigo-950/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-cyan-300 mb-2">Email Support</h3>
            <p className="text-blue-300">
              <a href="mailto:support@emotivis.com" className="hover:text-cyan-400 transition-colors">
                support@emotivis.com
              </a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-950/20 to-indigo-950/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-purple-300 mb-2">Response Time</h3>
            <p className="text-blue-300">
              Within 24 hours
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
    </section>
  );
}
