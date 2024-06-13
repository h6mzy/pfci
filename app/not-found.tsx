import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main>
      <div className='pad'>
        <div className='text-center'>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href='/'>Return Home</Link>
        </div>
      </div>
    </main>
  )
}