import ContactCard from './ContactCard'

const Statement = () => {
	return (
		<div>
			<ContactCard
				elem={<>
					<h2>Contact Me</h2>
					<p>If you have any general inquiries or interesting ideas, feel free to contact me</p>
				</>}
			/>
			<ContactCard
				elem={<>
					<h2>Contact Info</h2>
					<p>KevinKultrol@gmail.com</p>
					<p>(786)-395-1867</p>
				</>}
			/>
		</div>
	)
}
export default Statement