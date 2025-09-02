"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Shield, Server, Code, ArrowRight, CheckCircle, Terminal, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MatrixRain } from "@/components/matrix-rain"
import { LoadingScreen } from "@/components/features/loading-screen"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "WELCOME TO CYBER CRIME LAB"

  useEffect(() => {
    setIsLoaded(true)
    let i = 0
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeTimer)
      }
    }, 100)

    return () => clearInterval(typeTimer)
  }, [])

  return (
    <>
      <LoadingScreen />
      <div className="flex flex-col min-h-screen">
        {/* Matrix Hero Section */}
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
          <MatrixRain />

          {/* Hero Content */}
          <div className="relative z-10 container px-4 md:px-6 text-center">
            <div className="space-y-8">
              {/* Matrix-style typing effect */}
              <div className="font-mono text-green-500">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-wider">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </h1>
                <div className="text-lg md:text-xl text-green-400 mb-8">
                  <div className="typing-animation">&gt; ETHICAL HACKING PROTOCOLS ACTIVATED</div>
                </div>
              </div>

              {/* Stats Matrix */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-mono text-green-500 font-bold">500+</div>
                  <div className="text-xs text-green-400 font-mono">SYSTEMS SECURED</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-mono text-green-500 font-bold">99.9%</div>
                  <div className="text-xs text-green-400 font-mono">SUCCESS RATE</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-mono text-green-500 font-bold">24/7</div>
                  <div className="text-xs text-green-400 font-mono">MONITORING</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-mono text-green-500 font-bold">0</div>
                  <div className="text-xs text-green-400 font-mono">BREACHES</div>
                </div>
              </div>

              {/* Terminal-style CTA */}
              <div className="glass-card p-6 max-w-2xl mx-auto text-left">
                <div className="font-mono text-green-500 text-sm mb-4">
                  <div className="flex items-center mb-2">
                    <Terminal className="h-4 w-4 mr-2" />
                    <span>root@cybercrimelab:~$</span>
                  </div>
                  <div className="pl-6">
                    <div className="mb-1">&gt; initialize_security_scan.exe</div>
                    <div className="mb-1">&gt; target: your_network</div>
                    <div className="mb-1">&gt; status: READY</div>
                    <div className="text-yellow-500">&gt; awaiting_authorization...</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="cyber-button font-mono">AUTHORIZE SCAN</Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="font-mono border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent"
                    >
                      VIEW PROTOCOLS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <ArrowRight className="h-6 w-6 text-green-500 rotate-90" />
            </div>
          </div>
        </section>

        {/* Services Matrix */}
        <section className="w-full py-24 bg-gradient-to-b from-black to-gray-950 relative">
          <div className="absolute inset-0 bg-grid-white mask-radial-faded opacity-20" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block font-mono text-green-500 bg-black/50 px-4 py-2 rounded mb-4">
                &gt; SECURITY_PROTOCOLS.EXE
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">ADVANCED SECURITY MATRIX</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Multi-layered defense systems powered by ethical hacking methodologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-border glass-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                    <Shield className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">PENETRATION_TEST</h3>
                    <div className="text-green-500 text-sm font-mono">STATUS: ACTIVE</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Advanced intrusion simulation protocols to identify system vulnerabilities before malicious actors
                  exploit them.
                </p>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Network infiltration testing</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Application security analysis</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Social engineering assessment</span>
                  </div>
                </div>
              </div>

              <div className="cyber-border glass-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                    <Server className="h-8 w-8 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">SECURITY_AUDIT</h3>
                    <div className="text-cyan-500 text-sm font-mono">STATUS: SCANNING</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Comprehensive infrastructure analysis using advanced scanning algorithms and manual verification
                  protocols.
                </p>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex items-center text-cyan-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Infrastructure assessment</span>
                  </div>
                  <div className="flex items-center text-cyan-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Compliance verification</span>
                  </div>
                  <div className="flex items-center text-cyan-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Risk matrix analysis</span>
                  </div>
                </div>
              </div>

              <div className="cyber-border glass-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-lg mr-4">
                    <Code className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">CODE_ANALYSIS</h3>
                    <div className="text-yellow-500 text-sm font-mono">STATUS: REVIEWING</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Deep code inspection using static and dynamic analysis tools to identify security vulnerabilities.
                </p>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex items-center text-yellow-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Static code analysis</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Runtime vulnerability detection</span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Secure coding recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Matrix Style */}
        <section className="w-full py-24 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-white opacity-10" />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block font-mono text-green-500 bg-black/50 px-4 py-2 rounded mb-4">
                    &gt; SYSTEM_CREDENTIALS.TXT
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6 font-mono">AUTHENTICATED SECURITY EXPERTS</h2>
                  <p className="text-gray-400 text-lg">
                    Our elite team of certified ethical hackers operates with military-grade precision and
                    uncompromising ethical standards.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "CERTIFIED ETHICAL HACKER (CEH)",
                    "OFFENSIVE SECURITY CERTIFIED PROFESSIONAL (OSCP)",
                    "CERTIFIED INFORMATION SYSTEMS SECURITY PROFESSIONAL (CISSP)",
                    "ZERO TOLERANCE FOR UNAUTHORIZED ACCESS",
                    "MILITARY-GRADE CONFIDENTIALITY PROTOCOLS",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-mono text-green-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link href="/about">
                    <Button className="cyber-button font-mono">ACCESS_TEAM_PROFILES</Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-8">
                  <div className="font-mono text-green-500 text-sm mb-4">
                    <div className="flex items-center mb-2">
                      <Terminal className="h-4 w-4 mr-2" />
                      <span>SECURITY_STATUS.LOG</span>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">THREAT_LEVEL:</span>
                      <span className="text-green-500">MINIMAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">FIREWALL_STATUS:</span>
                      <span className="text-green-500">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">INTRUSION_DETECTION:</span>
                      <span className="text-green-500">MONITORING</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">LAST_SCAN:</span>
                      <span className="text-green-500">00:00:01 AGO</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">VULNERABILITIES:</span>
                      <span className="text-red-500">0 CRITICAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Matrix */}
        <section className="w-full py-24 bg-black relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block font-mono text-green-500 bg-black/50 px-4 py-2 rounded mb-4">
                &gt; MISSION_REPORTS.DB
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 font-mono">SUCCESSFUL OPERATIONS</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Classified mission reports from our most critical security operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "OPERATION: FINANCIAL_FORTRESS",
                  status: "MISSION_COMPLETE",
                  description: "Neutralized advanced persistent threats targeting multinational banking infrastructure",
                  image: "/images/case-study-1.png",
                  classification: "TOP_SECRET",
                },
                {
                  title: "OPERATION: DIGITAL_COMMERCE",
                  status: "OBJECTIVES_MET",
                  description: "Secured e-commerce platform against sophisticated payment system exploits",
                  image: "/images/case-study-2.png",
                  classification: "CONFIDENTIAL",
                },
                {
                  title: "OPERATION: MEDICAL_SHIELD",
                  status: "THREAT_ELIMINATED",
                  description: "Protected healthcare systems from ransomware attacks targeting patient data",
                  image: "/images/case-study-3.png",
                  classification: "RESTRICTED",
                },
              ].map((mission, index) => (
                <div
                  key={index}
                  className="cyber-border glass-card overflow-hidden group hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={mission.image || "/placeholder.svg"}
                      width={500}
                      height={300}
                      alt={mission.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-mono text-red-500 bg-red-500/20 px-2 py-1 rounded">
                        {mission.classification}
                      </div>
                      <div className="text-xs font-mono text-green-500">{mission.status}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white font-mono mb-3">{mission.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{mission.description}</p>
                    <Link href="/portfolio">
                      <Button variant="link" className="p-0 text-green-500 hover:text-green-400 font-mono">
                        ACCESS_REPORT
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Matrix */}
        <section className="w-full py-24 bg-gradient-to-t from-black to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>

          <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-12">
                <div className="font-mono text-green-500 text-lg mb-6">
                  &gt; SYSTEM_ALERT: UNAUTHORIZED_ACCESS_DETECTED
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">SECURE YOUR NETWORK</h2>
                <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
                  Don't wait for a breach. Initialize our security protocols now and protect your digital assets with
                  military-grade cybersecurity.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href="/contact">
                    <Button size="lg" className="cyber-button font-mono text-lg px-8 py-4">
                      <Lock className="mr-2 h-5 w-5" />
                      INITIATE_SECURITY_SCAN
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-mono text-lg px-8 py-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-black bg-transparent"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      VIEW_ALL_PROTOCOLS
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 text-sm font-mono text-green-500">
                  &gt; RESPONSE_TIME: &lt; 24 HOURS | THREAT_LEVEL: CRITICAL
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
