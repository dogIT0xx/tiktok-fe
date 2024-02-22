import Search from './Search'
import Button from './Button'
import { images } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
	return (
		<header className='flex justify-between items-center w-full h-16 px-4 fixed bg-white border-b-2 border-[#1618230f]'>
			<img
				className='mr-48'
				src={images.logo}
			></img>
			<Search></Search>
			<div className='flex justify-between'>
				<Button
					style={{
						borderWidth: '1px',
						borderStyle: 'ridge',
						boderColor: '#1618231f',
						marginRight: '20px',
					}}
					leftIcon={<FontAwesomeIcon icon='fa-solid fa-plus' />}
				>
					Upload
				</Button>
				<Button style={{ background: '#fe2c55', color: '#ffffff' }}>
					Log in
				</Button>
				<button className='size-10 p-2 ml-3'>
					<FontAwesomeIcon icon='fa-solid fa-ellipsis-vertical' />
				</button>
			</div>
		</header>
	)
}
