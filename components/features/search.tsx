"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FocusTrap } from "@/components/ui/focus-trap"

interface SearchResult {
  title: string
  url: string
  excerpt: string
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search data
  const searchData: SearchResult[] = [
    {
      title: "Penetration Testing Services",
      url: "/services#penetration-testing",
      excerpt: "Comprehensive security testing to identify vulnerabilities before attackers do.",
    },
    {
      title: "Security Audits",
      url: "/services#security-audits",
      excerpt: "Thorough evaluation of your security infrastructure and policies.",
    },
    {
      title: "About Cyber Crime Lab",
      url: "/about",
      excerpt: "Learn about our team of certified ethical hackers and security experts.",
    },
    {
      title: "Case Studies",
      url: "/portfolio",
      excerpt: "Explore our successful security projects and client testimonials.",
    },
    {
      title: "Security Blog",
      url: "/blog",
      excerpt: "Latest insights on cybersecurity trends and best practices.",
    },
  ]

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = searchData.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(query.toLowerCase()),
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setResults([])
    }
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="text-gray-400 hover:text-white"
        aria-label="Open search"
      >
        <Search className="h-4 w-4" />
        <span className="ml-2 hidden sm:inline">Search</span>
        <kbd className="ml-2 hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <FocusTrap active={isOpen}>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
              aria-label="Search input"
            />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} aria-label="Close search">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="max-h-[300px] overflow-y-auto">
            {isLoading && (
              <div className="flex items-center justify-center py-6">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-500"></div>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="space-y-2">
                {results.map((result, index) => (
                  <a
                    key={index}
                    href={result.url}
                    className="block p-3 rounded-md hover:bg-muted focus:bg-muted focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium text-sm">{result.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{result.excerpt}</div>
                  </a>
                ))}
              </div>
            )}

            {!isLoading && query.length > 2 && results.length === 0 && (
              <div className="text-center py-6 text-muted-foreground">No results found for "{query}"</div>
            )}

            {query.length <= 2 && (
              <div className="text-center py-6 text-muted-foreground">Type at least 3 characters to search</div>
            )}
          </div>
        </FocusTrap>
      </div>
    </div>
  )
}
