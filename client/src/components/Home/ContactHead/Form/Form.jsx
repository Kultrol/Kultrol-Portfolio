import InputDiv from './InputDiv'

const Form = () => {
	return (
		<form action="">
			<InputDiv/>
			<textarea placeholder={`Enter Inquiry`}/>
			<button type={`submit`}>Send email</button>
		</form>

	)
}

export default Form