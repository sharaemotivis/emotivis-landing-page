import { Star, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { logoImage } from '../lib/assets';

export function Testimonials() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#0f172a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoImage} 
              alt="Emotivis Logo" 
              className="h-24 w-auto"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-500/30 mb-6">
            <MessageSquare className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm">TESTIMONIALS</span>
          </div>
          
          <h2 className="mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
            Leave Feedback
          </h2>
          
          <p className="text-blue-200 max-w-3xl mx-auto text-lg md:text-xl mb-8">
            Share your experience with Emotivis and help others discover the power of emotional intelligence training.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-600/50 hover:shadow-violet-500/70 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Write a Testimony
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-[#0f172a] border-blue-500/30 max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-blue-100 text-2xl">Share Your Experience</DialogTitle>
                <DialogDescription className="text-blue-300">
                  Tell us about your journey with Emotivis and how it has transformed your team
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="testimony-name" className="text-blue-200">Full Name *</Label>
                  <Input 
                    id="testimony-name" 
                    placeholder="John Doe" 
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="testimony-email" className="text-blue-200">Email *</Label>
                  <Input 
                    id="testimony-email" 
                    type="email" 
                    placeholder="john@company.com" 
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="testimony-role" className="text-blue-200">Job Title *</Label>
                  <Input 
                    id="testimony-role" 
                    placeholder="e.g., Call Center Manager" 
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="testimony-company" className="text-blue-200">Company Name *</Label>
                  <Input 
                    id="testimony-company" 
                    placeholder="Your Company" 
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50" 
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="testimony-plan" className="text-blue-200">Which Plan Do You Use? *</Label>
                  <Select>
                    <SelectTrigger id="testimony-plan" className="bg-[#1e293b] border-blue-500/30 text-white">
                      <SelectValue placeholder="Select your plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0f172a] border-blue-500/30">
                      <SelectItem value="movement">Join the Movement (Pre-Launch)</SelectItem>
                      <SelectItem value="spark">Spark</SelectItem>
                      <SelectItem value="empower">Empower</SelectItem>
                      <SelectItem value="elevate">Elevate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-blue-200 mb-2 block">Rating *</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-8 h-8 ${
                            star <= (hoverRating || rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-blue-500/30'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-blue-400 mt-1">
                    {rating > 0 ? `You rated ${rating} out of 5 stars` : 'Click to rate'}
                  </p>
                </div>
                <div>
                  <Label htmlFor="testimony-message" className="text-blue-200">Your Testimony *</Label>
                  <Textarea 
                    id="testimony-message" 
                    placeholder="Share your experience with Emotivis... How has it impacted your team? What results have you seen?"
                    rows={6}
                    className="bg-[#1e293b] border-blue-500/30 text-white placeholder:text-blue-400/50"
                    required
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    id="testimony-consent" 
                    className="mt-1 w-4 h-4 rounded border-blue-500/30 bg-[#1e293b] text-cyan-600 focus:ring-cyan-500"
                    required
                  />
                  <Label htmlFor="testimony-consent" className="text-sm text-blue-300">
                    I consent to Emotivis using my testimony for marketing purposes and displaying it on their website and promotional materials.
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 py-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Submit Testimony
                </Button>
                <p className="text-xs text-blue-400 text-center">
                  Your feedback helps us improve and inspires others to transform their teams!
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Appreciation Message */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-200 text-lg md:text-xl italic">
            "We deeply appreciate every testimonial shared. Your feedback helps us continuously improve and inspires other teams to embark on their emotional intelligence journey."
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      </div>
    </section>
  );
}
