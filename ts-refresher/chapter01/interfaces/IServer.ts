interface IPublicAddress {
	netmask: String;
	gateway: String;
	address: String;
}

interface IServer {
	hostname: String;
	location: String;
	active: Boolean;
	public_address: IPublicAddress;
}