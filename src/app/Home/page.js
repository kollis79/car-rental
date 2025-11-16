import Navbar from "../components/Navbar";
import Services from "../Services/page";
export default function Home(){
    return(
       
        <div className=" h-screen w-full overflow-hidden ">
            <video className=" h-screen absolute top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
            src="video.mp4"
            autoPlay
            loop
            muted
            playsInline>

            </video>
            <div className="absolute inset-0 bg-black/90"></div>
            <Navbar/>
            <Services/>
           
          <div className="relative flex items-center justify-center h-full">
             <h1 className="text-white text-center leading-tight text-7xl">NEED A RIDE? <p>CALL US ANYTIME.</p></h1>
          </div>
        </div>
    )

}