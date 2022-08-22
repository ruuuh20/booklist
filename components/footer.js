import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex mb-1 text-center md:mb-0">
              <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">BOOKLIST</a>

            

            
            </div>

            <div className="md:ml-auto w-full md:w-auto flex space-x-1">
              <span className="block"> <a href="https://piakim.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">Site: Pia Kim</a></span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}