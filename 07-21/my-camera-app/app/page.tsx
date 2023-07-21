import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>My Next.js Website</h1>
      <Link href="/camera">Go to Camera Page</Link>
    </div>
  )
}
