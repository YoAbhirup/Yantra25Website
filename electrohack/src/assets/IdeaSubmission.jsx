import react from "react";
import {Link} from "react-router-dom";
import {buttonVariants} from "../components/ui/button"
import TiltedCard from '../components/ui/TiltedCard/TiltedCard';

export default function IdeaSubmission(){
    return(
        <div className="mb-12">
            <div className="text-white mt-6 ml-6" style={{width:"18vw"}}>
            <Link
    to="/" // Route to navigate to
    className="flex flex-row gap-2"
    style={{ fontSize: "1.5vw" }}
  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left mt-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
    Back to Home Page
  </Link>
        
            </div>

            <div className="text-center font-semibold mt-12 gradienttext1" style={{fontSize:"5vw"}}>
            Tracks
        </div>
        <div className="flex flex-row items-center justify-center mt-10 gap-32">
        <TiltedCard
  imageSrc={"/1520172670937.jpg"}
  altText="VLSI Design"
  captionText="VLSI Design"
  containerHeight="20vw"
  containerWidth="20vw"
  imageHeight="20vw"
  imageWidth="20vw"
  rotateAmplitude={18}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
  <p className="tilted-card-demo-text font-bold text-white " style={{fontSize:"2.3vw",  marginLeft:"2vw", marginTop:"4vw"}}>
      VLSI Design
    </p>
  }
/>

<TiltedCard
  imageSrc={"/jorge-ramirez-nr3AmB4_B8g-unsplash.jpg"}
  altText="Embedded Systems with IOT"
  captionText="Embedded Systems with IOT"
  containerHeight="20vw"
  containerWidth="20vw"
  imageHeight="20vw"
  imageWidth="20vw"
  rotateAmplitude={18}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text font-bold text-white " style={{fontSize:"2.3vw",  marginLeft:"2vw", marginTop:"4vw"}}>
      Embedded Systems with IOT
    </p>
  }
/>

<TiltedCard
  imageSrc={"/1715842926157.png"}
  altText="PCB Design"
  captionText="PCB Design"
  containerHeight="20vw"
  containerWidth="20vw"
  imageHeight="20vw"
  imageWidth="20vw"
  rotateAmplitude={18}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text font-bold text-white " style={{fontSize:"2.3vw", marginLeft:"2vw", marginTop:"4vw"}}>
      PCB Design
    </p>
  }
/>
        </div>
            <div className="text-center mt-24 gradienttext1" style={{fontSize:"5vw"}}>
            Problem Statements
        </div>
        <div className="mt-12 mb-12 flex flex-col gap-10">
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>1.</div>
                <div>The Mumbai Case Study</div>
                <a href="https://drive.google.com/file/d/1pqVYBO0gSrSCgxeGXHt4tZpdXAQ_Zwg_/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>2.</div>
                <div>The New Delhi Case Study</div>
                <a href="https://drive.google.com/file/d/1CuOKxj3i_nVp5dajPrn9r3_gxzDfyg6g/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>3.</div>
                <div>The Bangalore Case Study</div>
                <a href="https://drive.google.com/file/d/1dMLcvSkNjnstpuIT61bMYIS_jhhPH1xN/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>4.</div>
                <div>The Metro Cities Case Study</div>
                <a href="https://drive.google.com/file/d/1-hBU3r1AlDRSQhivMQrK7Zz3OSYaHqO9/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>5.</div>
                <div>The Rajasthan Case Study</div>
                <a href="https://drive.google.com/file/d/1YhbOME7RpjqaS12BsNK7ikH3WScGUQQe/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>6.</div>
                <div>The Kolkata Case Study</div>
                <a href="https://drive.google.com/file/d/1zaND_6Jj7NthKBgc-g96wmahZGNlcNOD/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>7.</div>
                <div>The Hyderabad Case Study</div>
                <a href="https://drive.google.com/file/d/1WWb96aWVXtL-g7mBJlpVHaYWh78VMloW/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>8.</div>
                <div>The North-East Case Study</div>
                <a href="https://drive.google.com/file/d/1bSqXX1krfs7FEguyQM05VG0eQn6yVqF_/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>9.</div>
                <div>The Jharkhand Case Study</div>
                <a href="https://drive.google.com/file/d/169FMZ_G3BWHIhrNxeZxiTzCaYDLIYzS0/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-24 mr-24" style={{fontSize:"2vw"}}>
                <div>10.</div>
                <div>The Chennai Case Study</div>
                <a href="https://drive.google.com/file/d/18MlRqRMcNmPwMzOdc0KPAfS5OLdMiMfm/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Check it out</a>
            </div>
        </div>

        <div className="text-center mt-24 gradienttext1" style={{fontSize:"5vw"}}>
            Download & Installation Guides
        </div>
        <div className="mt-12 mb-12 flex flex-col gap-10">
            <div className="flex flex-row text-white justify-between ml-96 mr-96" style={{fontSize:"2vw"}}>
                <div>Arduino IDE</div>
                <a href="https://drive.google.com/file/d/1ginKcDAAakq94FLpqQic3mSe1O_ZzHp3/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline " style={{transition:"0.3s"}}>Download</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-96 mr-96" style={{fontSize:"2vw"}}>
                <div>Quartus Prime</div>
                <a href="https://drive.google.com/file/d/1HaBabTQtdy0GSdzwlCwJ8_Qp81hrfpSO/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Download</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-96 mr-96" style={{fontSize:"2vw"}}>
                <div>KiCAD</div>
                <a href="https://drive.google.com/file/d/1fQ0uMsRqQU6vuXFvhrbSmzxJztwYO6uy/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Download</a>
            </div>
            <div className="flex flex-row text-white justify-between ml-96 mr-96" style={{fontSize:"2vw"}}>
                <div>Inventory list</div>
                <a href="https://drive.google.com/file/d/17kNdMOqKg509LeGAFIghD0eFo-hpyIzF/view?usp=drive_link" target="_blank" className="hover:text-orange-500 underline" style={{transition:"0.3s"}}>Download</a>
            </div>
        </div>
        
        <div style={{height:"6vw"}}></div>
        </div>
    )
}

