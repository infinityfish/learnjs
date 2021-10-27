import React from 'react'

    function Header({ title }){
        return (
            <div class="header">
                <h2>{ title ? title : "BantuGeeks is Awesome" }</h2>
                <h5><a href='learning.html'>Go to LearningPage</a></h5>
            </div>
        )
    }

    function Footer(){
        return (
            <div class= "footer">
                <h6>CopyRight 2022 BantuGeeks</h6>
            </div>
        )
    }

   export default function HomePage(){

        const students = ['ola', 'mary', 'ife']
        
        const [likes, setLikes] = React.useState(0)

        function handleClick(){
            console.log("increment clicked")
            setLikes(likes + 1)
        }
        return (
            <div class="container">
                <Header title="Learn JS the EZ way"/>
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