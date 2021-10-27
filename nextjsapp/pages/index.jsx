import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'


   export default function HomePage(){

        const students = ['ola', 'mary', 'ife']
        
        const [likes, setLikes] = React.useState(0)

        function handleClick(){
            console.log("increment clicked")
            setLikes(likes + 1)
        }
        return (
            <div class="container">
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