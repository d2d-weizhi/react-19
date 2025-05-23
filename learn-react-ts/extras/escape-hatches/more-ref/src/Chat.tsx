export function createConnection() {
	// A real connection would actually connect to the server
	return {
		connect() {
			console.log('✅ Connecting...');
		},
		disconnect() {
			console.log('❌ Disconnected.');
		}
	};
}