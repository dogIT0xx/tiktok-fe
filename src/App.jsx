import { Header, LeftNav, Main } from './components'
import './fontawasome'

export default function App() {
	return (
		<>
			<Header></Header>
			<div className='flex'>
				<LeftNav></LeftNav>
				<Main></Main>
			</div>
		</>
	)
}
