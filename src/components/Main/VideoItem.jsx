import CircleButton from './CircleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function VideoItem({
	id,
	userName,
	name,
	avatar,
	titleVideo,
	tags,
	soundtrack,
	srcVideo,
}) {
	return (
		<div className='flex justify-between w-[700px] pt-4'>
			<img
				className='size-14 rounded-full object-cover'
				src={avatar}
			></img>
			<div className='flex w-[624px] flex-col'>
				<div className='flex justify-between'>
					<div className='flex flex-col w-[550px]'>
						<div className='flex'>
							<strong className='mr-2'>{userName}</strong>
							<span>{name}</span>
						</div>
						<div className='flex'>
							<span>{titleVideo}</span>
							<ul className='flex'>
								<li className='text-[#2b5db8] font-semibold'>
									#{tags[0]}
								</li>
								<li className='text-[#2b5db8] font-semibold'>
									#{tags[1]}
								</li>
								<li className='text-[#2b5db8] font-semibold'>
									#{tags[2]}
								</li>
								<li className='text-[#2b5db8] font-semibold'>
									#{tags[3]}
								</li>
							</ul>
						</div>
						<strong>{soundtrack}</strong>
					</div>

					<button className='w-24 h-9 flex justify-center text-base px-4 rounded-sm items-center bg-white border-[#fe2c55] border text-[#fe2c55]'>
						Follow
					</button>
				</div>

				<div className='flex'>
					<video
						className='w-96 h-[600px] rounded-xl border-[#161823f] border'
						controls
					>
						<source
							src={srcVideo}
							type='video/mp4'
						></source>
					</video>
					<div className='flex flex-col justify-end w-12 h-78 ml-3'>
						<CircleButton count='133'>
							<FontAwesomeIcon icon='fa-solid fa-heart' />
						</CircleButton>
						<CircleButton count='133'>
							<FontAwesomeIcon icon='fa-solid fa-message' />
						</CircleButton>
						<CircleButton count='133'>
							<FontAwesomeIcon icon='fa-solid fa-bookmark' />
						</CircleButton>
						<CircleButton count='133'>
							<FontAwesomeIcon icon='fa-solid fa-share' />
						</CircleButton>
					</div>
				</div>
			</div>
		</div>
	)
}
