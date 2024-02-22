export default function Button({ children, leftIcon }) {
	return (
		<button className='w-56 h-12 flex justify-start text-base p-2 pl-4 rounded-sm items-center text-black hover:text-[#fe2c55] hover:bg-[#16182308]'>
			<div className='mr-4'>{leftIcon}</div>
			<span className='text-lg font-bold'>{children}</span>
		</button>
	)
}
