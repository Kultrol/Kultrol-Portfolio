import Statement from './Statement/Statment'
import Form from  './Form/Form'


const ContactHead = () => {
	return(
		<div className={`w-full h-full flex flex-col justify-start items-center sm:justify-center md:px-12 xl:flex-row xl:mx-24 xl:my-16`}>
			<Statement/>
			<Form/>
		</div>
	)
}

export default ContactHead