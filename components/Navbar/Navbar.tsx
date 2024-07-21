"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "components/Button/Button"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import { NavLinks } from "utils"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id)
        }
      })

      // Check if the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const session = null
  return (
    <nav className={`flexBetween navbar paddings z-50 ${isScrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="gap-7">
        <Link href="/">
          <Image src="/mainlogo.png" width={80} height={43} alt="dekalo" />
        </Link>
      </div>
      <div>
        <ul className="text-small hidden gap-20 xl:flex">
          <a
            href="#about"
            className={
              activeLink === "about" ? "border-b-3 border-[#487b8f] text-xl font-bold text-white" : "text-xl text-white"
            }
          >
            $ALLIN
          </a>
          <a
            href="#how-to-buy"
            className={
              activeLink === "how-to-buy"
                ? "border-b-3 border-[#487b8f] text-xl font-bold text-white"
                : "text-xl text-white"
            }
          >
            HOWTOBUY
          </a>
        </ul>
      </div>
      <div className="flexCenter gap-2">
        {session ? (
          <>
            UserPhoto
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              go to dashboard
            </Button>
          </>
        ) : (
          <AuthProviders />
        )}
        <Link href="https://x.com/allin_onsol1?s=21&t=4ZQwXy6jS-rHe_Y8pwoF-w">
          <Image src="/TwitterX.png" height={30} width={30} alt="" />
        </Link>
        <Link href="https://dexscreener.com/solana/5scrnfejztxzx3qbqzrpnqhqkgja2ajwfwxlcmrkkxwa">
          <Image src="/Dexscreener.png" height={30} width={30} alt="" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
