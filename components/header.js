
import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 text-darkred mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/">
            <a  className="mb-1 md:mb-0">BOOKLIST</a>
            </Link>

       
        </div>
      </Container>
    </header>
  )
}