// Components:
import { useEffect } from "react";
import SecondaryHeading from "../components/secondaryHeading"
import ContactSection from "./home/contactSection"

const About = () => {
	// Effects:
	useEffect(() => {
			window.scrollTo(0, 0)
    }, []);
	// Return:
	return <div className='my-[75px]'>
		<div className='mb-[75px] flex justify-between gap-[60px] flex-wrap'>
			<div className='h-[350px] flex-1 min-w-[250px]'>
				<img
					className='object-cover h-full w-full'
					src='/assets/about.png'
					alt='about'
				/>
			</div>
			<div className='mt-[30px]'>
				<h3 className='text-[16px] text-[#E3CD27] font-semibold mb-[6px]'>Elite Fitness Coach</h3>
				<SecondaryHeading title="Hello, I'm Alex Carter" />
				<div className='max-w-[650px] font-light'>
					<p className='mb-[18px] text-[#5F5D5D] '>Fitness wasn’t always my passion—it became one through personal transformation. Growing up, I struggled with low energy, unhealthy habits, and a lack of confidence. I tried different workout programs and diets, but nothing seemed to work consistently. Frustrated, I decided to take a different approach: learning everything I could about fitness, nutrition, and mindset.</p>
					<p className='mb-[18px] text-[#5F5D5D] '>Through years of trial and error, I discovered that fitness isn’t about quick fixes—it’s about sustainable habits. I started strength training, focused on proper nutrition, and, most importantly, changed my mindset. Slowly, I saw results. My body grew stronger, my energy levels improved, and I felt more confident than ever.
					</p>
					<p className='mb-[18px] text-[#5F5D5D] '>As my progress became noticeable, friends and family began asking for advice. I loved helping them, and seeing their transformations inspired me even more. That’s when I realized my true passion: coaching others to achieve their own fitness goals. </p>
					<p className="mb-[18px] text-[#5F5D5D]">I became certified, studied various training methods, and worked with clients of all backgrounds. I learned that every individual is different—what works for one person may not work for another. That’s why I focus on personalized coaching, creating plans tailored to each person’s goals, lifestyle, and fitness level.</p>
				</div>
			</div>
		</div>
		<div className='flex justify-between gap-[60px] flex-wrap'>
			<div className='mt-[30px] order-2 lg:order-1'>
				<h2 className='font-bold text-[32.487px] mb-[20px]'>My Coaching Style</h2>
				<div className='max-w-[650px] font-light'>
					<p className='mb-[18px] text-[#5F5D5D] '>Elite fitness is about precision, personalization, and performance. My approach combines science-backed training, biometric analysis, and tailored strategies to enhance strength, longevity, and vitality.
					More than just workouts, I offer a holistic, concierge-level experience, integrating mobility, recovery, nutrition, and mindset coaching for peak physical and mental performance. Every program is designed for sustainable excellence, ensuring clients not only achieve results but maintain them for life.</p>

					<p className='mb-[18px] text-[#5F5D5D] '>This is fitness at its finest—crafted for those who demand the best.
					</p>
				</div>
			</div>
			<div className='h-[350px] flex-1 min-w-[250px] order-1 lg:order-2'>
				<img
					className='object-cover h-full w-full'
					src='/assets/philosophy.png'
					alt='about'
				/>
			</div>
		</div>
		<ContactSection />
	</div>
}

export default About