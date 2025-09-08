import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Cyberteey Crime Lab",
  description: "Latest insights, tips, and news about cybersecurity, digital forensics, and online safety.",
}

const blogPosts = [
  {
    title: "The Rise of Cryptocurrency Scams: How to Protect Yourself",
    excerpt: "Learn about the most common cryptocurrency scams and how to avoid becoming a victim.",
    image: "/images/blog-1.png",
    category: "Security Tips",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "cryptocurrency-scams-protection",
  },
  {
    title: "Digital Forensics in 2024: New Tools and Techniques",
    excerpt: "Explore the latest developments in digital forensics technology and methodology.",
    image: "/images/blog-2.png",
    category: "Digital Forensics",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "8 min read",
    slug: "digital-forensics-2024",
  },
  {
    title: "Incident Response Best Practices for Small Businesses",
    excerpt: "Essential steps every small business should take when facing a cyber security incident.",
    image: "/images/blog-3.png",
    category: "Incident Response",
    author: "Jennifer Park",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "incident-response-small-business",
  },
  {
    title: "Social Engineering Attacks: Recognizing the Red Flags",
    excerpt: "Understanding how cybercriminals manipulate human psychology to gain unauthorized access.",
    image: "/images/blog-1.png",
    category: "Security Awareness",
    author: "Dr. Sarah Chen",
    date: "2023-12-28",
    readTime: "7 min read",
    slug: "social-engineering-red-flags",
  },
  {
    title: "Blockchain Analysis: Tracing Cryptocurrency Transactions",
    excerpt: "Deep dive into the techniques used to trace and analyze blockchain transactions.",
    image: "/images/blog-2.png",
    category: "Asset Recovery",
    author: "Michael Rodriguez",
    date: "2023-12-20",
    readTime: "10 min read",
    slug: "blockchain-analysis-techniques",
  },
  {
    title: "Building a Cyber Security Culture in Your Organization",
    excerpt: "How to create a security-conscious workplace that protects against cyber threats.",
    image: "/images/blog-3.png",
    category: "Security Culture",
    author: "Jennifer Park",
    date: "2023-12-15",
    readTime: "9 min read",
    slug: "building-security-culture",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          Blog & Insights
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Cybersecurity Knowledge Hub</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay informed with the latest cybersecurity insights, tips, and industry developments from our team of
          experts.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge>{post.category}</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to our newsletter for the latest cybersecurity insights and updates.
        </p>
      </div>
    </div>
  )
}
