// Packages:
import { Libre_Franklin } from 'next/font/google'

// Constants:
const libreFranklin = Libre_Franklin({
  variable: '--font-libre-franklin',
  subsets: ['latin'],
})

// Functions:
const Tweet = ({
  profilePicture,
  name,
  username,
  time,
  content,
  count,
}: {
  profilePicture: string
  name: string
  username: string
  time: string
  content: string
  count?: number
}) => (
  <div className={`px-4 ${libreFranklin.className} border-2 border-border`}>
    <div className='flex flex-col'>
      <div className='flex items-start justify-center gap-2'>
        <div className='size-10 bg-cover bg-center bg-no-repeat rounded-full' style={{ backgroundImage: profilePicture }} />
        <div className='flex flex-col'>
          <div className='flex mb-0.5'>
            <span className='font-bold'>{name}</span>
            <span>@{username}</span>
          </div>
          <div></div>
          <div className='mt-3'></div>
        </div>
      </div>
      <div className='flex'>

      </div>
    </div>
  </div>
)

// Exports:
export default Tweet
