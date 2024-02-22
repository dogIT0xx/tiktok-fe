export default function CircleButton({ children, count }) {
	return (
		<>
			<button className='size-12 rounded-full bg-[#1618230f] mb-2'>
				{children}
			</button>
			<strong className='text-xs mb-3 flex justify-center'>
				{count}
			</strong>
		</>
	)
}
