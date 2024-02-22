import VideoItem from './VideoItem'

export default function Main() {
	let videoItem = (
		<VideoItem
			id='1'
			userName='fossil193'
			name='Fossil'
			avatar='https://petto.vn/wp-content/uploads/2019/07/3150_sao-han-sinh-nam-1997-10.jpg?v=1598606906'
			titleVideo='Brabant Horse'
			tags={['horse', 'animals', 'huge', 'animalsoftiktok']}
			soundtrack='some original - Animal'
			srcVideo='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
		></VideoItem>
	)
	return (
		<main className='h-auto w-[1300px] flex justify-center mt-16 ml-56'>
			<ul className='w-[700px] h-full flex flex-col justify-between divide-y'>
				<li className='mb-3'>{videoItem}</li>
				<li className='mb-3'>{videoItem}</li>
				<li className='mb-3'>{videoItem}</li>
				<li className='mb-3'>{videoItem}</li>
				<li className='mb-3'>{videoItem}</li>
			</ul>
		</main>
	)
}

let data = {
	id: 1,
	userName: 'fossil193',
	name: 'Fossil',
	avatar: 'blah',
	titleVideo: 'Brabant Horse',
	tag: ['horse', 'animals', 'huge', 'animalsoftiktok'],
	soundtrack: 'some original - Animal',
	srcVideo: 'blah',
}
