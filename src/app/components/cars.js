"use client";
import { easeInOut, motion } from "framer-motion";

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
          <p className="text-center text-white  ">CAR RENTAL SERVICES </p>
          <p>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div onClick={""} className="w-30 ml-50">
              {" "}
              <p className=" border-8 mt-20 text-black">RESERVE</p>
            </div>
          </p>{" "}
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
          <p className="text-center text-white  ">CAR RENTAL SERVICES </p>
          <p>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div onClick={""} className="w-30 ml-50">
              {" "}
              <p className=" border-8 mt-20 text-black">RESERVE</p>
            </div>
          </p>{" "}
        </div>

        <img src="/honda 3.jpg" className=" w-[35%] h-80 mb-10"></img>
      </div>

      <div className="h-80  p-1  flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">CAR RENTAL SERVICES </p>
          <p>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div onClick={""} className="w-30 ml-50">
              {" "}
              <p className=" border-8 mt-20 text-black">RESERVE</p>
            </div>
          </p>{" "}
        </div>

        <img src="/corolla.jpg" className=" w-[35%] h-80 mb-10"></img>
      </div>
      <div className="h-80  p-1  flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">CAR RENTAL SERVICES </p>
          <p>
            Experience unmatched comfort and sophistication with Kollis
            Logistics executive luxury car service, ideal for business travel,
            special occasions, and exclusive nightlife services with presence in
            Lagos.
            <div onClick={"#"} className="w-30 ml-50">
              {" "}
              <p className=" border-8 mt-20 text-black">RESERVE</p>
            </div>
          </p>{" "}
        </div>

        <img src="/honda 3.jpg" className=" w-[35%] h-80 mb-10"></img>
      </div>
      <p className="text-4xl text-center">EXCUTIVE</p>
      <div className="h-80  p-1   flex justify-center ">
        <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
          <p className="text-center text-white  ">SECURITY SERVICE </p>
          <p>
            At Kollis-Logistics, safety and security are paramount. Our highly
            trained armed security professionals offer peace of mind throughout
            your journey, whether you’re attending high-profile events or
            require personal security in Nigeria.
            <div onClick={"#"} className="w-30 ml-50">
              
              <p className=" border-8 mt-20 text-black">RESERVE</p>
            </div>
          </p>
        </div>

        <img src="/police.webp" className=" w-[35%] h-80 mb-10"></img>
      </div>
      <div>
        <div className="h-80  p-1   flex justify-center ">
          <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
            <p className="text-center text-white  ">SECURITY SERVICE </p>
            <p>
              Experience unmatched comfort and sophistication with Kollis
              Logistics executive luxury car service, ideal for business travel,
              special occasions, and exclusive nightlife services with presence
              in Lagos..
              <div onClick={"#"} className="w-30 ml-50">
                {" "}
                <p className=" border-8 mt-20 text-black">RESERVE</p>
              </div>
            </p>{" "}
          </div>

          <img src="prado.webp" className=" w-[35%] h-80 mb-10"></img>
        </div>
        <div>
          <div className="h-80  p-1   flex justify-center ">
            <div className="w-[40%] bg-black/70 shadow-2xl p-8 flex flex-col gap-8 items-center text-center ">
              <p className="text-center text-white  ">SECURITY SERVICE </p>
              <p>
                Experience unmatched comfort and sophistication with Kollis
                Logistics executive luxury car service, ideal for business
                travel, special occasions, and exclusive nightlife services with
                presence in Lagos.
                <div onClick={"#"} className="w-30 ml-50">
                  {" "}
                  <p className=" border-8 mt-20 text-black">RESERVE</p>
                </div>
              </p>{" "}
            </div>

            <img
              src="/2008-Toyota-Highlander-Base.webp"
              className=" w-[35%] h-80 mb-10"
            ></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
