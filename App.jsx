import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, Clock, Users, Zap, MessageSquare, TrendingUp, Star, ArrowRight, Mail, Phone, MessageCircle, Timer, AlertCircle } from 'lucide-react'
import './App.css'

function App() {
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds
  const [visitorCount, setVisitorCount] = useState(247)

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Simulate visitor count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3))
    }, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const problems = [
    {
      icon: <MessageSquare className="w-6 h-6 text-red-500" />,
      title: "Cold outreach fatigue",
      description: "Prospects are ghosting more often, even if they seemed interested a week ago"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Decision maker bottlenecks", 
      description: "You finally reach the right person, and then it's 'circle back'"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Platform changes",
      description: "LinkedIn, email deliverability, even ad targeting rules keep shifting"
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Time sinks",
      description: "Following up with dozens of warm leads that never turn into anything"
    },
    {
      icon: <Phone className="w-6 h-6 text-red-500" />,
      title: "24/7 availability pressure",
      description: "If you miss that one call or DM, someone else gets the deal"
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Works Inside Your Existing Tools",
      description: "No new apps, no new logins, no training required. Plugs into your current email, WhatsApp, and CRM."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "7 Pre-Built Nurture Sequences",
      description: "Welcome, interested-but-not-ready, cold re-engagement, meeting follow-up, and more."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "24-Hour Setup Guarantee",
      description: "Get your automation running within 24 hours or your money back."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Automated Lead Scoring",
      description: "Automatically prioritize your hottest leads based on engagement and behavior."
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "£97",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 500 leads",
        "Email + SMS automation",
        "3 nurture sequences",
        "Basic reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "£197",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 2,000 leads",
        "Email + SMS + WhatsApp",
        "7 nurture sequences", 
        "Advanced reporting",
        "Priority support",
        "Lead scoring",
        "CRM integration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "£397", 
      period: "/month",
      description: "For established businesses scaling fast",
      features: [
        "Unlimited leads",
        "Full automation suite",
        "Custom sequences",
        "Real-time analytics",
        "Phone support",
        "Custom integrations",
        "Dedicated success manager"
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Mitchell Consulting",
      text: "Went from losing 60% of leads to converting 40% of cold prospects. This system pays for itself in the first week.",
      rating: 5
    },
    {
      name: "James Thompson", 
      company: "Thompson Manufacturing",
      text: "Finally, automation that actually works with how we do business. No more missed follow-ups, no more lost deals.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Rodriguez Legal",
      text: "Saved 15 hours per week on lead follow-up. Now I can focus on what I do best - serving clients.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Urgency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <Timer className="w-4 h-4" />
            <span>Launch Special Ends In: {formatTime(timeLeft)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{visitorCount} people viewing this page</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">LeadNurture Pro</span>
            </div>
            <Button variant="outline">Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 Launch Special - 50% Off First Month
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Never Lose Another Lead
            <span className="text-blue-600 block">Again</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The only lead nurture system that works <strong>inside your existing tools</strong>. 
            No new apps, no training required. Your leads get nurtured automatically while you focus on closing deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            ✅ 24-hour setup guarantee &nbsp;&nbsp; ✅ 30-day money-back guarantee &nbsp;&nbsp; ✅ No contracts
          </p>
          
          {/* Social Proof */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <span>Join 500+ businesses already using this</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Are You Burned Out From Lead Gen in 2025?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone. Business owners everywhere are struggling with the same lead nurturing challenges:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {problem.icon}
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Solution: Invisible Automation That Actually Works
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
            Our system plugs into your existing communication channels and nurtures leads automatically. 
            Same workflow you've used for years, just automated behind the scenes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business size. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => {
                      // Stripe payment links - replace with actual Stripe links
                      const stripeLinks = {
                        starter: 'https://buy.stripe.com/starter-plan',
                        professional: 'https://buy.stripe.com/professional-plan', 
                        enterprise: 'https://buy.stripe.com/enterprise-plan'
                      }
                      window.open(stripeLinks[plan.name.toLowerCase()], '_blank')
                    }}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses using our lead nurture automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that have automated their lead nurturing and increased conversions by 40%.
          </p>
          <div className="bg-white/10 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Get Started Free</h3>
            <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
                required
              />
              <Input 
                type="text" 
                name="company"
                placeholder="Company name"
                className="bg-white text-gray-900"
                required
              />
              <input type="hidden" name="_subject" value="New Lead Nurture Automation Signup" />
              <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
            <p className="text-xs mt-4 opacity-75">
              No credit card required. 7-day free trial. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions? Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Our team is here to help you get started with lead nurture automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>support@leadnurturepro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+44 (0) 1234 567890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span>Live chat available 9am-6pm GMT</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Quick Setup Call</h4>
                <p className="text-gray-600 mb-4">
                  Book a 15-minute call with our automation experts to get your system set up in record time.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Schedule Free Call
                </Button>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    We'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="https://formspree.io/f/YOUR_CONTACT_FORM_ID" method="POST" className="space-y-4">
                    <Input 
                      type="text" 
                      name="name"
                      placeholder="Your name"
                      required
                    />
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Your email"
                      required
                    />
                    <Input 
                      type="text" 
                      name="company"
                      placeholder="Company name"
                    />
                    <Textarea 
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      required
                    />
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">LeadNurture Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                The lead nurturing automation that works inside your existing tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Setup Guide</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 LeadNurture Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg px-6 py-3"
          onClick={() => {
            document.querySelector('form').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Start Free Trial
        </Button>
      </div>

      {/* Exit Intent Popup Trigger */}
      <div className="hidden">
        <div id="exit-intent-popup" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                <CardTitle>Wait! Don't Miss Out</CardTitle>
              </div>
              <CardDescription>
                Get 50% off your first month - this offer expires in {formatTime(timeLeft)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                <Input type="email" name="email" placeholder="Enter your email" required />
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Claim 50% Discount
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App

