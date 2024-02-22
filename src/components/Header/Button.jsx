export default function Button({ children, leftIcon, style }) {
	return (
		<button
			className='w-28 h-9 flex justify-center text-base px-4 rounded-sm items-center'
			style={style}
		>
			{leftIcon && <div className='text-black mr-2'>{leftIcon}</div>}
			<span> {children}</span>
		</button>
	)
}
