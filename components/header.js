
import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 mb-4 text-darkred md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap justify-between">
          <Link href="/">
            <a  className="mb-1 md:mb-0"><img className="w-3/5" src="/logoasset1.svg" /></a>
            </Link>

       <nav className='text-[20px]'>[ This is a demo ]</nav>
        </div>
      </Container>
    </header>
  )
}