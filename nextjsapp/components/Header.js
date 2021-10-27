import Link from 'next/link'
    export default function Header({ title }){
        return (
            <div class="header">
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