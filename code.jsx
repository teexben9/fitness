import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Target, Zap, TrendingUp, Instagram, Twitter, Facebook, Menu, X } from 'lucide-react';

const EliteFitnessWebsite = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Intersection observer for scroll animations
            const sections = document.querySelectorAll('[data-animate]');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.8;
                if (isVisible && !visibleSections[section.id]) {
                    setVisibleSections(prev => ({ ...prev, [section.id]: true }));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleSections]);

    const programs = [
        {
            title: "FAT LOSS",
            description: "Burn fat, preserve muscle. Science-backed protocols for sustainable transformation.",
            features: ["Customized nutrition", "Progressive cardio", "Metabolic conditioning"],
            gradient: "from-red-600/20 to-orange-600/20"
        },
        {
            title: "MUSCLE BUILDING",
            description: "Build raw size and strength. Hypertrophy-focused training for maximum growth.",
            features: ["Periodized training", "Volume optimization", "Recovery protocols"],
            gradient: "from-blue-600/20 to-cyan-600/20"
        },
        {
            title: "STRENGTH",
            description: "Get strong. Powerlifting principles for elite-level performance and power.",
            features: ["Compound movements", "Progressive overload", "Performance tracking"],
            gradient: "from-purple-600/20 to-pink-600/20"
        },
        {
            title: "ONLINE COACHING",
            description: "World-class training, anywhere. Full programming, accountability, and support.",
            features: ["24/7 app access", "Weekly check-ins", "Form video analysis"],
            gradient: "from-green-600/20 to-emerald-600/20"
        }
    ];

    const transformations = [
        { name: "Marcus T.", stat: "-42 lbs", timeline: "16 weeks", type: "Fat Loss" },
        { name: "Sarah K.", stat: "+18 lbs", timeline: "20 weeks", type: "Muscle" },
        { name: "David R.", stat: "405 lb", timeline: "12 weeks", type: "Deadlift PR" },
        { name: "Jessica M.", stat: "-55 lbs", timeline: "24 weeks", type: "Transformation" }
    ];

    const whyPoints = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "PRECISION",
            description: "Every rep, every set calculated for maximum results. No guesswork."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "PROVEN METHODS",
            description: "10+ years coaching elite athletes and everyday warriors to peak performance."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "ACCOUNTABILITY",
            description: "Weekly check-ins, progress tracking, and unwavering support when it matters."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "RESULTS",
            description: "Track every metric. Celebrate every milestone. Transform completely."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
            {/* Custom Cursor Effect */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .font-display {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.05em;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.4);
        }
        
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="font-display text-3xl tracking-wider gradient-text">
                            ELITE FIT
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#programs" className="text-sm font-medium hover:text-red-500 transition-colors">PROGRAMS</a>
                            <a href="#results" className="text-sm font-medium hover:text-red-500 transition-colors">RESULTS</a>
                            <a href="#about" className="text-sm font-medium hover:text-red-500 transition-colors">ABOUT</a>
                            <button className="btn-primary px-6 py-3 rounded-none text-sm font-bold tracking-wider">
                                GET STARTED
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black border-t border-white/10">
                        <div className="px-6 py-4 space-y-4">
                            <a href="#programs" className="block text-sm font-medium hover:text-red-500 transition-colors">PROGRAMS</a>
                            <a href="#results" className="block text-sm font-medium hover:text-red-500 transition-colors">RESULTS</a>
                            <a href="#about" className="block text-sm font-medium hover:text-red-500 transition-colors">ABOUT</a>
                            <button className="btn-primary w-full px-6 py-3 rounded-none text-sm font-bold tracking-wider">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 leading-none">
                            FORGE YOUR
                            <br />
                            <span className="gradient-text">ULTIMATE SELF</span>
                        </h1>
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
                            Elite training for those who refuse to settle. Transform your body,
                            elevate your mind, dominate your goals.
                        </p>
                    </div>

                    <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
                        <button className="btn-primary px-10 py-5 rounded-none text-lg font-bold tracking-wider group">
                            START YOUR TRANSFORMATION
                            <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="glass-card px-10 py-5 rounded-none text-lg font-bold tracking-wider hover:bg-white/10 transition-all">
                            WATCH RESULTS
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <div>
                            <div className="font-display text-4xl md:text-5xl text-red-500">500+</div>
                            <div className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Transformations</div>
                        </div>
                        <div>
                            <div className="font-display text-4xl md:text-5xl text-red-500">10+</div>
                            <div className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div>
                            <div className="font-display text-4xl md:text-5xl text-red-500">98%</div>
                            <div className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-32 px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div
                        id="programs-header"
                        data-animate
                        className={`text-center mb-20 ${visibleSections['programs-header'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                        <h2 className="font-display text-5xl md:text-7xl mb-6">
                            CHOOSE YOUR <span className="text-red-500">PATH</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Elite programs designed for warriors who demand results. Pick your transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                id={`program-${index}`}
                                data-animate
                                className={`glass-card p-8 hover-lift group cursor-pointer ${visibleSections[`program-${index}`] ? 'animate-scale-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <h3 className="font-display text-3xl mb-4 group-hover:text-red-500 transition-colors">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {program.description}
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        {program.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-500">
                                                <ChevronRight className="w-4 h-4 mr-2 text-red-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full border border-white/20 py-3 text-sm font-bold tracking-wider hover:bg-white/10 transition-all group-hover:border-red-500 group-hover:text-red-500">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Train Section */}
            <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div
                        id="why-header"
                        data-animate
                        className={`text-center mb-20 ${visibleSections['why-header'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                        <h2 className="font-display text-5xl md:text-7xl mb-6">
                            WHY <span className="text-red-500">ELITE FIT</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Results backed by science. Progress driven by discipline. Excellence as standard.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyPoints.map((point, index) => (
                            <div
                                key={index}
                                id={`why-${index}`}
                                data-animate
                                className={`text-center ${visibleSections[`why-${index}`] ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 glass-card rounded-full mb-6 text-red-500 hover:scale-110 transition-transform">
                                    {point.icon}
                                </div>
                                <h3 className="font-display text-2xl mb-4">{point.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section id="results" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div
                        id="results-header"
                        data-animate
                        className={`text-center mb-20 ${visibleSections['results-header'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                        <h2 className="font-display text-5xl md:text-7xl mb-6">
                            REAL PEOPLE. <span className="text-red-500">REAL RESULTS.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Discipline and consistency create champions. These are the warriors who committed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {transformations.map((client, index) => (
                            <div
                                key={index}
                                id={`result-${index}`}
                                data-animate
                                className={`glass-card p-8 hover-lift group ${visibleSections[`result-${index}`] ? 'animate-scale-in' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Placeholder for before/after image */}
                                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center group-hover:from-red-900/20 group-hover:to-gray-900 transition-all">
                                    <div className="text-center">
                                        <div className="font-display text-5xl text-red-500 mb-2">{client.stat}</div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider">{client.type}</div>
                                    </div>
                                </div>

                                <h4 className="font-display text-2xl mb-2">{client.name}</h4>
                                <p className="text-gray-400 text-sm">{client.timeline} • {client.type}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        id="results-cta"
                        data-animate
                        className={`text-center ${visibleSections['results-cta'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    >
                        <button className="btn-primary px-10 py-5 rounded-none text-lg font-bold tracking-wider">
                            SEE ALL TRANSFORMATIONS
                        </button>
                    </div>
                </div>
            </section>

            {/* Trainer Bio Section */}
            <section id="about" className="py-32 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div
                            id="bio-image"
                            data-animate
                            className={`${visibleSections['bio-image'] ? 'animate-slide-in-left' : 'opacity-0'}`}
                        >
                            {/* Placeholder for trainer image */}
                            <div className="aspect-[3/4] glass-card flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-center relative z-10">
                                    <div className="font-display text-8xl text-gray-800 mb-4">ALEX</div>
                                    <div className="text-gray-600 uppercase tracking-widest">Head Coach</div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="bio-content"
                            data-animate
                            className={`${visibleSections['bio-content'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                        >
                            <h2 className="font-display text-5xl md:text-6xl mb-8">
                                YOUR <span className="text-red-500">COACH</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Over a decade in the trenches. Certified strength coach, former competitive athlete,
                                    and obsessive student of human performance.
                                </p>

                                <p>
                                    I don't do cookie-cutter programs or empty motivation. I build champions through
                                    precision training, relentless accountability, and proven methodology.
                                </p>

                                <p>
                                    Every client gets a custom roadmap. Every session has purpose. Every rep counts
                                    toward your transformation.
                                </p>

                                <p className="font-bold text-white text-xl pt-4">
                                    This is your moment. Let's make it count.
                                </p>
                            </div>

                            <div className="flex gap-4 mt-10">
                                <div className="glass-card px-6 py-4">
                                    <div className="font-display text-3xl text-red-500">NASM</div>
                                    <div className="text-xs text-gray-500 uppercase">Certified</div>
                                </div>
                                <div className="glass-card px-6 py-4">
                                    <div className="font-display text-3xl text-red-500">PN1</div>
                                    <div className="text-xs text-gray-500 uppercase">Nutrition</div>
                                </div>
                                <div className="glass-card px-6 py-4">
                                    <div className="font-display text-3xl text-red-500">10+</div>
                                    <div className="text-xs text-gray-500 uppercase">Years</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-red-500/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full"></div>
                </div>

                <div
                    id="final-cta"
                    data-animate
                    className={`max-w-4xl mx-auto text-center relative z-10 ${visibleSections['final-cta'] ? 'animate-fade-in-up' : 'opacity-0'}`}
                >
                    <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
                        STOP WAITING.
                        <br />
                        <span className="text-red-500">START BECOMING.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        The version of yourself you've always imagined is on the other side of action.
                        Your transformation starts with one decision.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="btn-primary px-12 py-6 rounded-none text-xl font-bold tracking-wider group">
                            BOOK CONSULTATION
                            <ChevronRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="https://wa.me/+255 650615631"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card px-12 py-6 rounded-none text-xl font-bold tracking-wider hover:bg-white/10 transition-all inline-block"
                        >
                            MESSAGE ON WHATSAPP
                        </a>
                    </div>

                    <p className="text-sm text-gray-600 mt-8 uppercase tracking-widest">
                        Limited spots available • Apply now
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="font-display text-3xl gradient-text mb-4">ELITE FIT</div>
                            <p className="text-gray-500 text-sm">
                                Elite training for elite results. Transform your body, elevate your life.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4 tracking-wider">QUICK LINKS</h4>
                            <div className="space-y-2">
                                <a href="#programs" className="block text-gray-500 hover:text-red-500 transition-colors text-sm">Programs</a>
                                <a href="#results" className="block text-gray-500 hover:text-red-500 transition-colors text-sm">Results</a>
                                <a href="#about" className="block text-gray-500 hover:text-red-500 transition-colors text-sm">About</a>
                                <a href="#" className="block text-gray-500 hover:text-red-500 transition-colors text-sm">Contact</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-4 tracking-wider">FOLLOW</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-red-500 transition-colors group">
                                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-red-500 transition-colors group">
                                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-10 h-10 glass-card flex items-center justify-center hover:bg-red-500 transition-colors group">
                                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
                        <p>© 2026 Elite Fit. All rights reserved. Built for champions.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EliteFitnessWebsite;