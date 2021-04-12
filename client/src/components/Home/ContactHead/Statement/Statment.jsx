import ContactCard from './ContactCard'

const Statement = () => {
	return(
		<div className="conStatement">
			<ContactCard
				elem={<>
					<h2>Contact Me</h2>
					<p>If you have any general inquiries or interesting ideas, feel free to contact me</p>
				</>}
				addClass={`sm:text-right sm:items-end sm:pr-2 xl:p-0`}
			/>
			<ContactCard
				elem={<>
					<h2>Contact Info</h2>
					<p>KevinKultrol@gmail.com</p>
					<p>(786)-395-1867</p>
				</>}
				addClass={`sm:text-left sm:items-start sm:pl-2 xl:items-end xl:pr-0`}
			/>
		</div>
	)
}
export default Statement