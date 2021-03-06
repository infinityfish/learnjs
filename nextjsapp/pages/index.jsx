import React from 'react'
import styles from './Home.module.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

export async function getStaticProps(){
    // we can fetch from external api too
    // const res = await fetch('/api/students')
    // const students = await res.json
    const students = ['ola', 'mary', 'ife']
    return {
        props: { students },
        // revalidate : 300 // revalidate every 5 mins
    }
}

export default function HomePage({students}){
   
        const [likes, setLikes] = React.useState(0)

        function handleClick(){
            console.log("increment clicked")
            setLikes(likes + 1)
        }
        return (
            <div className={styles.container}>
                <Header title="BantuGeeks Rocks with Next.js"/>
                <p>This is the body of the Home Page</p>
                <ul>
                    <h5>List of students</h5>
                    {students.map(student => <li key={student}>{student}</li>)}
                </ul>
                <button onClick={handleClick}>Like ({likes}) </button>
                
                <Footer />
            </div>
        )    
}