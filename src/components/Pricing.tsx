import { Check, X, Sparkles, CreditCard, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { logoImage } from '../lib/assets';

const pricingFeatures = [
  { name: "EI Tracking (Empathy, Communication, Engagement)", spark: true, empower: true, elevate: true },
  { name: "Custom Video Lessons", spark: "5 lessons", empower: "8 lessons", elevate: "10+ lessons" },
  { name: "Real-Time Insights", spark: true, empower: true, elevate: true },
  { name: "Rewards System (Gift Cards, Donations)", spark: false, empower: true, elevate: true },
  { name: "Team Analytics Dashboard", spark: false, empower: true, elevate: true },
  { name: "Employee of the Month Program", spark: false, empower: true, elevate: true },
  { name: "Predictive ROI Analytics", spark: false, empower: false, elevate: true },
  { name: "Custom Lesson Creation", spark: false, empower: false, elevate: true },
  { name: "Free Branded Mug", spark: false, empower: false, elevate: true },
  { name: "Priority Support", spark: false, empower: false, elevate: true },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculatePrice = (monthlyPrice: number) => {
    if (billingCycle === 'annual') {
      const annualPrice = monthlyPrice * 12;
      const discountedPrice = annualPrice * 0.85; // 15% discount
      return {
        total: discountedPrice.toFixed(2),
        perMonth: (discountedPrice / 12).toFixed(2),
        savings: (annualPrice - discountedPrice).toFixed(2)
      };
    }
    return {
      total: monthlyPrice.toFixed(2),
      perMonth: monthlyPrice.toFixed(2),
      savings: '0'
    };
  };

  const empowerPrice = calculatePrice(45);
  const elevatePrice = calculatePrice(68);

  return (
    <section id="pricing" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <CreditCard className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">PRICING</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src={logoImage} 
              alt="Emotivis Logo" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">
              Flexible Plans for Every Team
            </h2>
          </div>
          <p className="text-blue-300 max-w-2xl mx-auto mb-8 text-lg md:text-xl">
            Choose the plan that fits your organization's needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-[#1e293b] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-500/30">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                  : 'text-blue-300 hover:text-blue-100'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingCycle === 'annual' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                  : 'text-blue-300 hover:text-blue-100'
              }`}
            >
              Annual
              <Badge className="ml-2 bg-emerald-500 text-black border-0">Save 15%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Spark Tier */}
          <Card className="p-8 relative bg-[#1e293b]/50 backdrop-blur-sm border-blue-500/30">
            <div className="mb-6">
              <h3 className="mb-2 text-blue-100">Spark</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl text-cyan-400">$0</span>
                <span className="text-blue-300">/user</span>
              </div>
              <p className="text-blue-300">1-month free trial</p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
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
                        <Label htmlFor="spark-full-name" className="text-blue-200">Full Name</Label>
                        <Input id="spark-full-name" placeholder="Sarah Johnson" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                      </div>
                      <div>
                        <Label htmlFor="spark-email" className="text-blue-200">Email Address</Label>
                        <Input id="spark-email" type="email" placeholder="sarah@company.com" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                      </div>
                      <div>
                        <Label htmlFor="spark-company-name" className="text-blue-200">Company Name</Label>
                        <Input id="spark-company-name" placeholder="Acme Call Center" className="bg-[#1e293b] border-blue-500/30 text-white" required />
                      </div>
                      <div>
                        <Label htmlFor="spark-employee-size" className="text-blue-200">Employee Size</Label>
                        <Select required>
                          <SelectTrigger id="spark-employee-size" className="bg-[#1e293b] border-blue-500/30 text-white">
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
                        <Label htmlFor="spark-role" className="text-blue-200">Role/Title</Label>
                        <Select required>
                          <SelectTrigger id="spark-role" className="bg-[#1e293b] border-blue-500/30 text-white">
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

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">Basic EI tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">5 video lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">Real-time insights</span>
              </li>
              <li className="flex items-start gap-2 text-blue-500/40">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Rewards system</span>
              </li>
              <li className="flex items-start gap-2 text-blue-500/40">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Team analytics</span>
              </li>
            </ul>
          </Card>

          {/* Empower Tier */}
          <Card className="p-8 relative bg-gradient-to-br from-blue-950/70 to-cyan-950/50 backdrop-blur-sm border-cyan-500/50 border-2 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-600 border-0 text-white">
              Most Popular
            </Badge>
            <div className="mb-6">
              <h3 className="mb-2 text-cyan-200">Empower</h3>
              {billingCycle === 'monthly' ? (
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl text-cyan-300">${empowerPrice.perMonth}</span>
                    <span className="text-blue-300">/user/month</span>
                  </div>
                  <p className="text-blue-300">$22.50 for first 2 months</p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl text-cyan-300">${empowerPrice.total}</span>
                    <span className="text-blue-300">/user/year</span>
                  </div>
                  <p className="text-emerald-400">Save ${empowerPrice.savings} annually</p>
                  <p className="text-blue-300">${empowerPrice.perMonth}/month</p>
                </>
              )}
            </div>

            <Button disabled className="w-full mb-6 bg-gradient-to-r from-cyan-600/50 to-blue-600/50 cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              Coming Soon
            </Button>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Full EI tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">8 video lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Rewards system</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Team analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Employee of the Month</span>
              </li>
              <li className="flex items-start gap-2 text-blue-500/40">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Predictive analytics</span>
              </li>
            </ul>
          </Card>

          {/* Elevate Tier */}
          <Card className="p-8 relative border-yellow-500/70 border-2 bg-gradient-to-br from-yellow-950/50 to-orange-950/30 backdrop-blur-sm shadow-[0_0_40px_rgba(234,179,8,0.4)]">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-orange-600 border-0 text-black">
              <Sparkles className="w-3 h-3 mr-1" />
              Premium
            </Badge>
            <div className="mb-6">
              <h3 className="mb-2 text-yellow-200">Elevate</h3>
              {billingCycle === 'monthly' ? (
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl text-yellow-300">${elevatePrice.perMonth}</span>
                    <span className="text-blue-300">/user/month</span>
                  </div>
                  <p className="text-blue-300">$34 for first 2 months</p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl text-yellow-300">${elevatePrice.total}</span>
                    <span className="text-blue-300">/user/year</span>
                  </div>
                  <p className="text-emerald-400">Save ${elevatePrice.savings} annually</p>
                  <p className="text-blue-300">${elevatePrice.perMonth}/month</p>
                </>
              )}
            </div>

            <Button disabled className="w-full mb-6 bg-gradient-to-r from-yellow-600/50 to-orange-600/50 cursor-not-allowed text-black/60 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              Coming Soon
            </Button>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Everything in Empower</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">10+ video lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Predictive ROI analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Custom lesson creation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">FREE exclusive branded mug 🎁</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">Priority support</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-[#1e293b]/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 overflow-x-auto">
          <h3 className="mb-6 text-center text-blue-100">Detailed Feature Comparison</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-blue-500/30">
                <th className="text-left pb-4 pr-4 text-blue-200">Feature</th>
                <th className="text-center pb-4 px-4 text-blue-200">Spark</th>
                <th className="text-center pb-4 px-4 text-blue-200">Empower</th>
                <th className="text-center pb-4 px-4 text-blue-200">Elevate</th>
              </tr>
            </thead>
            <tbody>
              {pricingFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-blue-500/20">
                  <td className="py-4 pr-4 text-blue-200">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.spark === 'boolean' ? (
                      feature.spark ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-blue-500/30 mx-auto" />
                      )
                    ) : (
                      <span className="text-blue-300">{feature.spark}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.empower === 'boolean' ? (
                      feature.empower ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-blue-500/30 mx-auto" />
                      )
                    ) : (
                      <span className="text-blue-300">{feature.empower}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof feature.elevate === 'boolean' ? (
                      feature.elevate ? (
                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-blue-500/30 mx-auto" />
                      )
                    ) : (
                      <span className="text-blue-300">{feature.elevate}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
