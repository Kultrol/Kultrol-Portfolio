import Link from 'next/link'

const Links = ({setShowMenu}) => {
	return(
		<>
			<div className={`Title`}>
				<div onClick={() => setShowMenu(false)}>
					<h2>close</h2>
				</div>
			</div>
			<div className={`Links`}>
				<Link href={`/`} onClick={() => setShowMenu(false)}><a>Home</a></Link>
				<Link href={`/portfolio`} onClick={() => setShowMenu(false)}><a>Portfolio</a></Link>
				<Link href={`/about`} onClick={() => setShowMenu(false)}><a>About</a></Link>
				<Link href={`/contact`} onClick={() => setShowMenu(false)}><a>Contact</a></Link>
			</div>
		</>
	)
}

export default Links