import CircleButton from './CircleButton'

export default function VideoItem({ src }) {
	return (
		<div>
			<div className=''>
				<img></img>
				<div>TextInfo</div>
			</div>

			<div className='flex'>
				<video
					class='min-w-80 min-h-80 rounded'
					controls
				>
					<source
						src={src}
						type='video/mp4'
					></source>
				</video>
				<div className='flex flex-col w-12 h-78 ml-3'>
					<CircleButton count='133'>
						<i class='fa-solid fa-heart'></i>
					</CircleButton>
					<CircleButton count='133'>
						<i class='fa-solid fa-message'></i>
					</CircleButton>
					<CircleButton count='133'>
						<i class='fa-solid fa-bookmark'></i>
					</CircleButton>
					<CircleButton count='133'>
						<i class='fa-solid fa-share'></i>
					</CircleButton>
				</div>
			</div>
		</div>
	)
}
