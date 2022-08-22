
import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 bg-gray-200 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/">
            <a  className="mb-1 md:mb-0">BOOKLIST</a>
            </Link>

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <Link href="/"><a>Home</a>
              </Link>

            <Link href="/about"><a>About</a>
              </Link> 
          </nav>
        </div>
      </Container>
    </header>
  )
}