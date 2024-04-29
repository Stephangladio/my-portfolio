import HeroImg from '../assets/hero.png';
import { RiTwitterXLine, RiInstagramLine, RiLinkedinLine,RiGithubFill } from "react-icons/ri";

export default function Hero() {

    const config={
      subtitle:"I'm a Full-stack developer"
    }


  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
      <div className='md:w-1/2 flex flex-col font-hero-font'>
        <h1 className=' text-white text-6xl'>Hi,<br /> Im Stephan Gladio
          <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
          <a href='https://github.com/Stephangladio' target='_blank' className='pr-5 hover:text-white'><RiGithubFill size={30}/></a>
          <a href='https://www.instagram.com/deep._.chill?igsh=MThvOTQxc2NiYmh1Yg==' target='_blank' className='pr-5  hover:text-white'><RiInstagramLine size={30} /></a>
          <a href='https://www.linkedin.com/in/stephangladio/' target='_blank' className=' hover:text-white'><RiLinkedinLine size={30} /></a>
        </div>
      </div>  
        <img className='md:w-1/3' src={HeroImg} />
    </section>
  )
}

