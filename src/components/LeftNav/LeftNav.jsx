import Button from './Button'

export default function LeftNav() {
	return (
		<aside className='h-screen flex-shrink-0 pt-3 mt-16 fixed'>
			<Button leftIcon={<i class='fa-solid fa-house'></i>}>
				For You
			</Button>
			<Button leftIcon={<i class='fa-solid fa-user-plus'></i>}>
				Following
			</Button>
			<Button leftIcon={<i class='fa-solid fa-user-group'></i>}>
				Friends
			</Button>
			<Button leftIcon={<i class='fa-solid fa-compass'></i>}>
				Explore
			</Button>
			<Button leftIcon={<i class='fa-solid fa-video'></i>}>LIVE</Button>
			<Button leftIcon={<i class='fa-solid fa-user'></i>}>Profile</Button>
		</aside>
	)
}
