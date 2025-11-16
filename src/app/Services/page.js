import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      
      <div className=" h-screen w-full overflow-hidden ">
        <video
          className=" h-screen absolute top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
          src="video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/90"></div>
        <div></div>

        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-center leading-tight text-7xl">
            NEED A RIDE? <p>CALL US ANYTIME. </p>
           
            <p className="text-2xl mt-20">For More Info:</p>
            <p className="">080-659-406-92</p>
            <p>kollislogistics@gmail.com</p>
          </h1>
        </div>
      </div>
    </>
  );
}
