import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LeftNav() {
	return (
		<aside className='h-screen w-56 pt-3 mt-16 fixed divide-y'>
			<div className='flex flex-col'>
				<Button leftIcon={<FontAwesomeIcon icon='fa-solid fa-house' />}>
					For You
				</Button>
				<Button
					leftIcon={<FontAwesomeIcon icon='fa-solid fa-user-plus' />}
				>
					Following
				</Button>
				<Button
					leftIcon={<FontAwesomeIcon icon='fa-solid fa-user-group' />}
				>
					Friends
				</Button>
				<Button
					leftIcon={<FontAwesomeIcon icon='fa-solid fa-compass' />}
				>
					Explore
				</Button>
				<Button leftIcon={<FontAwesomeIcon icon='fa-solid fa-video' />}>
					LIVE
				</Button>
				<Button leftIcon={<FontAwesomeIcon icon='fa-solid fa-user' />}>
					Profile
				</Button>
			</div>
			<div className='flex flex-col justify-center items-center p-3'>
				<p className='text-base text-[#16182380]'>
					Log in to follow creators, like videos, and view comments.
				</p>
				<button className='w-52 h-12 m-3 flex justify-center text-base px-4 rounded items-center bg-white border-[#fe2c55] border-2 text-[#fe2c55]'>
					Follow
				</button>
			</div>
		</aside>
	)
}
