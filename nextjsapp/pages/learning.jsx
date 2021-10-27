
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LearningPage(){

    const topics = [
        'Functions and Arrow Functions', 
        'Objects, Arrays and Array Methods', 
        'Destructuring and Spread Operator',
        'Template Literals',
        'Ternary Operator',
        'ES Modules, import/export syntax',
        ]
    

    return (
        <div class="container">
            <Header title="JS Lessons for React"/>
            <p>This is what you need to know to be able to work with React</p>
            <ol>
    
                {topics.map(topic => <li key={topic}>{topic}</li>)}
            </ol>

            <p>
                <h6>React concepts to Understand</h6>
                <ol>
                    <li>Components</li>
                    <li>Props</li>
                    <li>State</li>
                </ol>

            </p>
            
            <Footer />
        </div>
    )    
}
