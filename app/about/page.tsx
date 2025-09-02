import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, Shield, Award, Briefcase, GraduationCap, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero-image.png" alt="Cybersecurity background" fill className="object-cover" priority />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  About Cyberteey
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                  A dedicated ethical hacker committed to strengthening digital security through expertise and
                  integrity.
                </p>
              </div>
            </div>
            <div className="relative lg:ml-auto">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] mx-auto">
                <Image src="/images/logo.png" alt="Cyberteey Logo" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                  Background & Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Meet the Expert Behind Cyberteey
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    With over a decade of experience in cybersecurity, I specialize in ethical hacking, penetration
                    testing, and security consulting for organizations of all sizes.
                  </p>
                  <p>
                    My journey in cybersecurity began with a passion for understanding how systems work and how they can
                    be protected. After completing formal education in Computer Science and specialized training in
                    cybersecurity, I dedicated my career to helping organizations identify and address their security
                    vulnerabilities before malicious actors could exploit them.
                  </p>
                  <p>
                    What sets my approach apart is a commitment to not just identifying vulnerabilities, but providing
                    practical, implementable solutions tailored to each client's specific needs and resources. I believe
                    in building long-term relationships with clients based on trust, confidentiality, and delivering
                    tangible results.
                  </p>
                  <p>
                    When I'm not securing digital systems, I contribute to the cybersecurity community through speaking
                    engagements, writing articles, and mentoring aspiring security professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Certifications & Qualifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="h-6 w-6 text-cyan-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Certified Ethical Hacker (CEH)</h4>
                      <p className="text-gray-400">EC-Council</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="h-6 w-6 text-cyan-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Offensive Security Certified Professional (OSCP)
                      </h4>
                      <p className="text-gray-400">Offensive Security</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="h-6 w-6 text-cyan-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Certified Information Systems Security Professional (CISSP)
                      </h4>
                      <p className="text-gray-400">(ISC)²</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="h-6 w-6 text-cyan-500 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">CompTIA Security+</h4>
                      <p className="text-gray-400">CompTIA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Areas of Specialization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Web Application Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Network Penetration Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Social Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Cloud Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Mobile Application Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan-500" />
                    <span className="text-gray-300">Security Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Professional Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Career Milestones</h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                From academic beginnings to industry leadership in cybersecurity.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l border-gray-700">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -ml-4 rounded-full bg-gray-800 border border-gray-700">
                  <Calendar className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-cyan-500">2022 - Present</span>
                    <span className="text-xl font-bold text-white">Founder, Cyberteey</span>
                  </div>
                  <p className="text-gray-400">
                    Established Cyberteey to provide specialized ethical hacking and cybersecurity services to clients
                    across various industries.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 pb-8 border-l border-gray-700">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -ml-4 rounded-full bg-gray-800 border border-gray-700">
                  <Briefcase className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-cyan-500">2018 - 2022</span>
                    <span className="text-xl font-bold text-white">Lead Security Consultant, CyberGuard Inc.</span>
                  </div>
                  <p className="text-gray-400">
                    Led a team of security professionals, conducting penetration tests and security assessments for
                    Fortune 500 companies.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 pb-8 border-l border-gray-700">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -ml-4 rounded-full bg-gray-800 border border-gray-700">
                  <Briefcase className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-cyan-500">2015 - 2018</span>
                    <span className="text-xl font-bold text-white">Security Engineer, TechDefend Solutions</span>
                  </div>
                  <p className="text-gray-400">
                    Specialized in web application security and network penetration testing for clients in financial and
                    healthcare sectors.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 border-l border-gray-700">
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 -ml-4 rounded-full bg-gray-800 border border-gray-700">
                  <GraduationCap className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-cyan-500">2011 - 2015</span>
                    <span className="text-xl font-bold text-white">MSc in Cybersecurity, Tech University</span>
                  </div>
                  <p className="text-gray-400">
                    Completed master's degree with thesis on advanced penetration testing methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Image Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/about-image.png" alt="Ethical hacker at work" fill className="object-cover" />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Securing the Digital World Through Ethical Practices
              </h2>
              <p className="text-gray-400 md:text-xl/relaxed">
                At Cyberteey, we're committed to making the digital world safer through ethical hacking, transparent
                security practices, and empowering organizations with the knowledge and tools they need to protect their
                assets and users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-cyan-900/20 px-3 py-1 text-sm text-cyan-500">
                Core Principles
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Our Values</h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                The ethical foundations that guide all our security work.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4">
                <Award className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Integrity</h3>
              <p className="text-center text-gray-400">
                We operate with the highest ethical standards, ensuring responsible handling of sensitive information
                and systems.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4">
                <Award className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Confidentiality</h3>
              <p className="text-center text-gray-400">
                We maintain strict confidentiality of client information and security findings, never disclosing details
                without authorization.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
              <div className="rounded-full bg-cyan-900/20 p-4">
                <Award className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Excellence</h3>
              <p className="text-center text-gray-400">
                We strive for excellence in all our security assessments, using the most current tools and
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Work with Cyberteey?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Get in touch today to discuss your security needs and how we can help protect your digital assets.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Contact Us</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-gray-600 text-gray-200 hover:bg-gray-800">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
