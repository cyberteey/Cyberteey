import React from "react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SearchModal } from "@/components/features/search"
import { ThemeToggle } from "@/components/features/theme-toggle"
import { SkipLink } from "@/components/accessibility/skip-link"

export function SiteHeader() {
  return (
    <>
      <SkipLink />
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2" aria-label="Cyber Crime Lab Home">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image src="/images/logo.png" alt="" width={32} height={32} className="object-contain" />
              </div>
              <span className="inline-block font-bold text-white font-mono">CYBER CRIME LAB</span>
            </Link>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-200 hover:text-white font-mono">
                    PROTOCOLS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-900/50 to-gray-900 p-6 no-underline outline-none focus:shadow-md"
                            href="/services"
                          >
                            <div className="relative h-8 w-8 overflow-hidden">
                              <Image
                                src="/images/logo-icon.png"
                                alt=""
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="mb-2 mt-4 text-lg font-medium text-white font-mono">SECURITY PROTOCOLS</div>
                            <p className="text-sm leading-tight text-gray-400">
                              Advanced ethical hacking and security assessment protocols.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <Link href="/services#penetration-testing" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-green-500 focus:bg-gray-800 focus:text-green-500">
                          <div className="text-sm font-medium leading-none text-white font-mono">PENETRATION_TEST</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Identify vulnerabilities before malicious actors do.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/services#security-assessment" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-green-500 focus:bg-gray-800 focus:text-green-500">
                          <div className="text-sm font-medium leading-none text-white font-mono">SECURITY_AUDIT</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Evaluate your security posture and identify weaknesses.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/services#code-review" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-green-500 focus:bg-gray-800 focus:text-green-500">
                          <div className="text-sm font-medium leading-none text-white font-mono">CODE_ANALYSIS</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            Find and fix security flaws in your application code.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-200 hover:text-white font-mono">TEAM</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-200 hover:text-white font-mono">
                      MISSIONS
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-200 hover:text-white font-mono">INTEL</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-200 hover:text-white font-mono">
                      CONTACT
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/recovery" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-200 hover:text-white font-mono">
                      RECOVERY
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <SearchModal />
              <ThemeToggle />
              <Link href="/contact">
                <Button variant="default" className="hidden cyber-button font-mono sm:inline-flex">
                  SECURE_NOW
                </Button>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-0 text-gray-200 hover:text-white md:hidden"
                    aria-label="Open navigation menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gray-900 text-white">
                  <div className="flex items-center mb-6">
                    <Image src="/images/logo.png" alt="" width={40} height={40} className="mr-2" />
                    <span className="text-xl font-bold font-mono">CYBER CRIME LAB</span>
                  </div>
                  <nav className="flex flex-col gap-4" role="navigation" aria-label="Mobile navigation">
                    <Link href="/" className="text-lg font-medium hover:text-green-500 font-mono">
                      HOME
                    </Link>
                    <Link href="/services" className="text-lg font-medium hover:text-green-500 font-mono">
                      PROTOCOLS
                    </Link>
                    <Link href="/about" className="text-lg font-medium hover:text-green-500 font-mono">
                      TEAM
                    </Link>
                    <Link href="/portfolio" className="text-lg font-medium hover:text-green-500 font-mono">
                      MISSIONS
                    </Link>
                    <Link href="/blog" className="text-lg font-medium hover:text-green-500 font-mono">
                      INTEL
                    </Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-green-500 font-mono">
                      CONTACT
                    </Link>
                    <Link href="/recovery" className="text-lg font-medium hover:text-green-500 font-mono">
                      RECOVERY
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-green-400 focus:bg-gray-800 focus:text-green-400",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
