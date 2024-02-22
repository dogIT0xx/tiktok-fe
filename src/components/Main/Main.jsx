import VideoItem from './VideoItem'

export default function Main() {
	return (
		<main className='h-auto w-[1300px] flex justify-center mt-16 ml-56'>
			<ul className='w-[700px] h-full flex flex-col justify-between'>
				<li className='min-h-[460px]'>
					<VideoItem src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></VideoItem>
				</li>
				<li className='min-h-[460px]'>
					<VideoItem src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></VideoItem>
				</li>
				<li className='min-h-[460px]'>
					<VideoItem src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></VideoItem>
				</li>
				<li className='min-h-[460px]'>
					<VideoItem src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'></VideoItem>
				</li>
			</ul>
		</main>
	)
}
