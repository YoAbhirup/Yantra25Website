import react from 'react';
import BlurText from '../../assets/textanimations/BlurText/BlurText'
import Timeline from './Timeline'

const milestones = [
    {
      title: "Tutorial-I",
      date: "3rd February 10:00am - 11:30am",
      description: "Learn about FPGA, how they play a key role in today’s world and delve into VLSI Design Ipsum Odor Sit Amet"
    },
    {
      title: "Idea Review (Review 0)",
      date: "3rd February 2:30pm - 4:30pm",
      description: "Present your ideas and start working with guidance from your mentors"
    },
    {
      title: "Tutorial-II",
      date: "3rd February 9:30Pm - 11:00Pm",
      description: "Explore Embedded Systems and IoT and strengthen your skills"
    },
    {
      title: "Review 1",
      date: "3rd & 4th February 11:15pm - 1:00am",
      description: "First review to track your progress"
    },
    {
      title: "Review 2",
      date: "4th February 8:30am - 10:30am",
      description: "Second review for further updates on your work"
    },
    {
      title: "Tutorial-III",
      date: "4th February 11:00am - 12:30pm",
      description: "Build your PCB designing skills as you learn from the very best"
    }
  ];

export default function Event(){
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
      

    return(
        <div className='mb-48'>
            <div className='flex flex-col align-center'>
                <img src={"../../public/logo (2).png"}/>
                <div className="text-center gradienttext1 mb-16" style={{fontSize:"6vw", fontFamily:'"Jersey 15", serif'}}>All Set To Trailblaze?</div>
                <div className='flex flex-row justify-center'>
                <BlurText
  text="With sustainability, AI, electronics and innovation at its core,"
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className=" text-3xl mb-4 text-white"
  style={{fontSize:"6vw",}}
/>
                </div>
                <div className='flex flex-row justify-center'>
                <BlurText
  text=" ElectroHack aims to motivates students to come up with  ElectroHack aims to motivates students to come up with "
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className=" text-3xl mb-4 text-white"
  style={{fontSize:"6vw",}}
/>
                </div>

                <div className='flex flex-row justify-center'>
                <BlurText
  text="awe-inspiring and creative solutions for Sustainable Development Goals. Learn from mentors, collaborate with like-minded peers and innovate your way to victory."
  delay={50}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className=" text-3xl text-white"
  style={{fontSize:"6vw",}}
/>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-24">
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Timeline</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out how the event unfolds
          </p>
        </div>
        <Timeline milestones={milestones} />
      </div>
        </div>
    )
}