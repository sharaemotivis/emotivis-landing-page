import { TrendingUp, DollarSign, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function SalesRep() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 via-blue-950 to-cyan-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-cyan-200 mb-4">Join Emotivis as a Sales Superstar!</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Sell a game-changing AI platform and earn uncapped commissions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Earnings Visual */}
            <Card className="p-8 bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-sm border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <h3 className="text-cyan-200 mb-6">Your Earning Potential</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FF00]/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <div>
                    <p className="text-3xl text-[#00FF00]">$28,857</p>
                    <p className="text-white/80">in 6 months</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-3xl text-yellow-400">$61,120</p>
                    <p className="text-blue-200">in 1 year</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-3xl text-cyan-300">$229,203</p>
                    <p className="text-blue-200">over 3 years</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <p className="text-blue-200">With uncapped commissions and growing demand</p>
              </div>
            </Card>

            {/* Opportunity Details */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-cyan-200 mb-3">Commission Structure</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong>10%</strong> on monthly plans ($4.50-$6.80/user)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong>15%</strong> on annual plans ($63.11-$104.04/user)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span><strong>Uncapped earnings</strong> potential</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                <h4 className="text-yellow-200 mb-3">What You'll Sell</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>AI platform boosting <strong>CSAT by 30%</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Improve retention by <strong>40%</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Target: <strong>100-150 users/month</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-violet-500/30">
                <h4 className="text-violet-200 mb-3">Why Join Emotivis?</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span>Game-changing product that sells itself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span>Proven ROI that clients love</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">✓</span>
                    <span>Full sales support and training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                >
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-[#0f172a] border-blue-500/30">
                <DialogHeader>
                  <DialogTitle className="text-blue-100">Apply for Sales Position</DialogTitle>
                  <DialogDescription className="text-blue-300">
                    Join our sales team and start earning today
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="sales-name" className="text-blue-200">Full Name</Label>
                    <Input id="sales-name" placeholder="John Doe" className="bg-[#1e293b] border-blue-500/30 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="sales-email" className="text-blue-200">Email</Label>
                    <Input id="sales-email" type="email" placeholder="john@email.com" className="bg-[#1e293b] border-blue-500/30 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="sales-experience" className="text-blue-200">Sales Experience</Label>
                    <Textarea 
                      id="sales-experience" 
                      placeholder="Tell us about your sales background..."
                      rows={4}
                      className="bg-[#1e293b] border-blue-500/30 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sales-pitch" className="text-blue-200">Why do you want to join Emotivis?</Label>
                    <Textarea 
                      id="sales-pitch" 
                      placeholder="Your motivation..."
                      rows={3}
                      className="bg-[#1e293b] border-blue-500/30 text-white"
                    />
                  </div>
                  <p className="text-sm text-blue-300">
                    Or email your resume to{" "}
                    <a href="mailto:careers@emotivis.com" className="text-cyan-400 hover:underline">
                      careers@emotivis.com
                    </a>
                  </p>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500">
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/80">
              Questions? Email us at{" "}
              <a href="mailto:careers@emotivis.com" className="text-white underline hover:text-[#00FF00]">
                careers@emotivis.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
