import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search() {
	return (
		<form
			action='get'
			className='h-11 w-[480px] bg-[#1618230f] px-4 py-3 rounded-full flex items-center'
		>
			<input
				type='text'
				className='w-full h-5 text-lg bg-transparent focus-visible:outline-none'
				placeholder='Search'
			/>
			<button className='w-12 h-10 p-2 text-lg bg-transparent rounded-full relative left-3'>
				<FontAwesomeIcon icon='fa-solid fa-magnifying-glass' />
			</button>
		</form>
	)
}
