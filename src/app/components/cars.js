"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

export default function Cars() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        staggerChildren: 0.8,
        delayChildren: 1,
        duration: 1,
        ease: "easeInOut",
      }}
      className=" bg-black/50 grid grid-cols-1 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          staggerChildren: 0.8,
          delayChildren: 1,
          duration: 1,
          ease: "easeInOut",
        }}
        className="h-100  p-1 flex justify-center  relative overflow-hidden "
      >
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center "
        >
          <p className="text-center text-white  ">2008 HONDER ACCORD </p>
          <div>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div className="w-30 ml-50">
              <p className=" border-8 mt-20 text-black">
                <a href="Reserve">BOOK ME</a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          src="/honda 3.jpg"
          className=" w-[35%] h-80 mb-10"
        ></motion.img>
      </motion.div>

      <div className="h-80  p-1  flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">2008 HONDER ACCORD </p>
          <div>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div className="w-30 ml-50">
              <p className=" border-8 mt-20 text-black"><a href="Booking">BOOK ME</a></p>
            </div>
          </div>
        </div>
        <Image
          src="/honda 3.jpg"
          alt="Honda"
          width={800}
          height={400}
          className="w-[35%] h-80 mb-10"
        />
      </div>

      <div className="h-80  p-1  flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">2006 CORROLLA</p>
          <div>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div className="w-30 ml-50">
              <p className=" border-8 mt-20 text-black"><a href="Taxi">BOOK ME</a> </p>
            </div>
          </div>
        </div>
        <Image
          src="/corolla.jpg"
          alt="Toyota Corolla"
          width={800}
          height={400}
          className="w-[35%] h-80 mb-10"
        />
      </div>
      <div className="h-80  p-1  flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">2008 HONDER ACCORD </p>
          <div>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div className="w-30 ml-50">
              <p className=" border-8 mt-20 text-black"><a href="Honda">BOOK ME</a></p>
            </div>
          </div>
        </div>
        <Image
          src="/honda 3.jpg"
          alt="Honda Car"
          width={800}
          height={400}
          className="w-[35%] h-80 mb-10"
        />
      </div>
      <p className="text-6xl text-center">EXECUTIVE</p>
      <div className="h-80  p-1   flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">SECURITY SERVICE </p>
          <div>
            At Kollis-Logistics, safety and security are paramount. Our highly
            trained armed security professionals offer peace of mind throughout
            your journey, whether you’re attending high-profile events or
            require personal security in Nigeria.
            <div className="w-30 ml-50">
              <p className=" border-8 mt-20 text-black"><a href="Security">BOOK ME</a></p>
            </div>
          </div>
        </div>
        <Image
          src="/police.webp"
          alt="Police Car"
          width={800}
          height={400}
          className="w-[35%] h-80 mb-10"
        />
      </div>
      <div>
        <div className="h-80  p-1   flex justify-center ">
          <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
            <p className="text-center text-white  ">2016 LEXUS 570 </p>
            <div>
              Experience unmatched comfort and sophistication with Kollis
              Logistics executive luxury car service, ideal for business travel,
              special occasions, and exclusive nightlife services with presence
              in Lagos..
              <div className="w-30 ml-50">
                <p className=" border-8 mt-20 text-black"><a href="Book">BOOK ME</a></p>
              </div>
            </div>
          </div>
          <Image
            src="/prado.webp"
            alt="prado"
            width={800}
            height={400}
            className="w-[35%] h-80 mb-10"
          />
        </div>
        <div>
          <div className="h-80  p-1   flex justify-center ">
            <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
              <p className="text-center text-white  ">2008 HIGHLANDER </p>
              <div>
                Experience unmatched comfort and sophistication with Kollis
                Logistics executive luxury car service, ideal for business
                travel, special occasions, and exclusive nightlife services with
                presence in Lagos.
                <div className="w-30 ml-50">
                  <p className=" border-8 mt-20 text-black"><a href="Highlander">BOOK ME</a></p>
                </div>
              </div>
            </div>
            <Image
              src="/2008-Toyota-Highlander-Base.webp"
              alt="2008 Toyota Highlander"
              width={800}
              height={400}
              className="w-[35%] h-80 mb-10"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
