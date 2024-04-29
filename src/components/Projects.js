import websiteImg1 from '../assets/weather.png'
import websiteImg2 from '../assets/perfumy.png'
import websiteImg3 from '../assets/Lamp.png'

export default function Projects() {

    const config={
        Projects:[
            {
                image: websiteImg1 ,
                description:`A React.js-based weather finding website utilizing HTML,
                Tailwind CSS and JavaScript for dynamic UI and functionality.`,
                link:"https://weather-react-phi-six.vercel.app/"
            },
            {
                image: websiteImg2 ,
                description:"A Ui based e-commerce website with using HTML and CSS ",
                link:"https://github.com/Stephangladio/Perfumy"
            },
            {
                image: websiteImg3 ,
                description:"I designed a lamp website for lamp store. It created with HTML,CSS, and JavaScript.",
                link:"https://github.com/Stephangladio/GladoLamp"
            },
        ]
    }

    return (
        <section className='flex flex-col py-20 px-5 justify-center bg-primary' id='projects'>
            <div className='w-1/2 font-hero-font'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                </div>
            </div>
            <div className='w-full font-hero-font'>
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.Projects.map((project)=>(
                        <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image} />
                    
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link}>View project</a>
                            </div>
                        </div>
                      
                    </div>
                    ))}
                    
                </div>

            </div>
        </section>
    )
}
