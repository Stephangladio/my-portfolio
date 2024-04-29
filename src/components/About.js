import AboutImg from '../assets/about.png'
export default function About() {

  const config={
    line1:"Hi, My name is Stephan Gladio. i am a Front-end web developer. I built beautiful website with react.js and tailwind CSS",
    line2:"I am proficient in frontend skills like react.js, Axios, tailwind CSS, Css3 and HTML5.",
    line3:"In backend i know python and I bring creativity to coding"
  }

  return (
    <section className='flex flex-col md:flex-row bg-secondary' id='about'>
        <div className='md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center font-hero-font'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
  )
}
