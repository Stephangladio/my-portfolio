import ResumeImg from '../assets/resume.jpg'

export default function Resume() {
  return (
    <section className='flex flex-col md:flex-row bg-secondary' id='resume'>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center font-hero-font'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn' href="https://drive.google.com/file/d/1xxwuWWd24EMj4SSiQ9ipndK9GvziXv9b/view" target='_blank'>Download</a> </p>
            </div>
        </div>
    </section>
  )
}
