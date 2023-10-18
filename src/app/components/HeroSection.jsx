import React from 'react';
import Image from 'next/image';
import styles from './globals.css';
 

const HeroSection = () => {

  return (
  
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12' >
        
            <div className='col-span-7 place-self-center'style={{marginLeft:"10%"}} >
                <h1 className="text-[#e91e1e] mb-4 text-4xl lg:text-6xl font-extrabold "> 
                Hello, I am Dinesh
                </h1>
                
                <p className='text-[#ffffff] text-lg lg:text-xl ' >
                Eager to secure challenging roles in Computer Science with broad proficiency in the use of computer science methods, tools, software packages and techniques. Alongside this, I have developed sound communication skills while delivering presentations to large audiences at university. As such, I am confident that I can make an instant impact in leadership roles.
                My key skills include: programming in C language, JavaScript, CSS, HTML for web designing.
                Microsoft word, Microsoft PowerPoint.
                other activities sports: Basketball, Tennis.
                </p>
            </div>
            <div className='col-span-5'>
                <Image src="/images/mtpic.png"
                alt="hero image"
                width={350}
                height={100}  
                />
            </div>
        </div>
    </section>
    
  )
}

export default HeroSection