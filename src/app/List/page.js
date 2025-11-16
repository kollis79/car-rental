
import Navbar from "../components/Navbar"
import Services from "../Services/page"
export default function List(){
    return(
      
        
 <div className=" h-screen w-full overflow-hidden ">
    <Navbar />
   
            <video className=" h-screen absolute top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
            src="video.mp4"
            autoPlay
            loop
            muted
            playsInline>

            </video> 
           
            <div className="absolute inset-0 bg-black/90"></div>
            
          <Services/>
          
        </div>
        
    )
}