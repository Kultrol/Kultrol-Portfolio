
const ContactCard = ({elem, addClass}) => {
	return(
		<div className={`conCard ${addClass}`}>
			{elem}
		</div>
	)

}

export default ContactCard
