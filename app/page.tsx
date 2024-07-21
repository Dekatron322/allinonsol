"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Image from "next/image"
import Link from "next/link"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"
import AuthProviders from "components/ProvidersComponents/AuthProviders"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])
  return (
    <section className="bg-black">
      <Navbar />
      <section id="about" className="about-section grid w-full py-8 max-sm:px-3 sm:text-end lg:h-screen lg:py-16">
        <div className="paddings mx-auto grid  w-full pb-10 max-sm:mt-20">
          <div className="flex h-full w-full items-center justify-between max-sm:justify-center max-sm:text-center">
            <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="250">
              <h1 className=" clash-font mt-16  flex max-w-2xl text-7xl font-extrabold text-[#FFFFFF] lg:text-[150px]">
                $ALLIN
              </h1>
              <p className="someClass my-8 max-w-2xl text-2xl leading-none tracking-tight text-[#FFFFFF] md:text-xl xl:text-4xl">
                FOR THE CULTURE
              </p>

              <p className="someClass my-8 max-w-2xl text-2xl leading-none tracking-tight text-[#FFFFFF] opacity-50 md:text-xl xl:text-4xl">
                You only need to go all in and you will
                <br /> never have to worry again
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" className="">
              {/* You can remove the Image component as it will be used as background */}
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings mt-10 w-full bg-[#000000] max-sm:px-3 ">
        <div className=" grid w-full     pb-10">
          <div className="w-full justify-between  sm:flex">
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/Pic02.png" width={500} height={700} alt="" />
            </div>
            <div
              data-aos="fade-down" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <h1 className="clash-font someClass mt-16 flex max-w-2xl justify-end text-3xl  font-extrabold  text-[#FFFFFF] lg:text-6xl">
                HOW TO BUY $ALLIN
              </h1>
              <p className="someClass my-6 max-w-2xl text-end  text-xl font-semibold leading-none tracking-tight text-white md:text-xl xl:text-3xl">
                GET A WALLET
              </p>
              <div className="flex w-full justify-end">
                <div className=" h-3 w-3 rounded-full bg-[#487b8f]"></div>
              </div>

              <p className="someClass my-6 max-w-2xl text-end  text-xl font-semibold leading-none tracking-tight text-white md:text-xl xl:text-3xl">
                BUY SOLANA
              </p>
              <div className="flex w-full justify-end">
                <div className=" h-3 w-3 rounded-full bg-[#487b8f]"></div>
              </div>

              <p className="someClass my-6 max-w-2xl text-end  text-xl font-semibold leading-none tracking-tight text-white md:text-xl xl:text-3xl">
                ADD $ALLIN TO YOUR WALLET
              </p>
              <div className="flex w-full justify-end">
                <div className=" h-2 w-20 rounded-full bg-[#487b8f]"></div>
              </div>

              <div className="relative mt-10 flex w-full justify-end">
                <div className="flex w-full flex-col justify-end">
                  <h3 className=" clash-font mb-6 text-end  font-bold text-white max-sm:text-3xl sm:text-3xl">
                    FOLLOW ON SOCIAL MEDIA
                  </h3>
                  <div className="flex justify-end gap-2">
                    <AuthProviders />

                    <Link href="https://x.com/venuscat_sol?s=11&t=lJcRGun_pd4gpFpb8bAobw" target="_blank">
                      <Image src="/TwitterX.png" height={30} width={30} alt="" />
                    </Link>
                    <Link
                      href="https://dexscreener.com/solana/gpmofkvaxocdetbcfysxun23bv5txud5qpjjz9hwf5eg"
                      target="_blank"
                    >
                      <Image src="/Dexscreener.png" height={30} width={30} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  )
}
