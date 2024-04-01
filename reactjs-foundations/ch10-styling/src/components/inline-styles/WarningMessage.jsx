function WarningMessage (props) {
	return (
		<p style={{color: "red", padding: "6px", backgroundColor: "#000"}}>
			{props.warningMessage}
		</p>
	);
}

export default WarningMessage;