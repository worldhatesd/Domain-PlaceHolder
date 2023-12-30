import Link from 'next/link';
import HoldIt from '@/components/holdit';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex items-center m-auto p-auto animate-flicker">
        <p className="text-7xl font-bold text-center">
          <HoldIt/>
        </p>
      </div>
    </main>
  )
}
