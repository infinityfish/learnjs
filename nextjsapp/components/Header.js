import Link from 'next/link'
import styles from './Header.module.css'

    export default function Header({ title }){
        return (
            <div>
                <h2>{ title ? title : "BantuGeeks on Next.js" }</h2>
                <Link href='/'>
                 <a >HomePage</a>
                </Link> {' '}
                <Link href='/learning'>
                 <a >LearningPage</a>
                </Link>         
            </div>
        )
    }