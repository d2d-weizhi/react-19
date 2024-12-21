// @ts-ignore
export function createConnection ({ serverUrl, roomId }) {
	// A real implementation would actually connect to the server
	
	return {
		connect() {
			console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
		},
		disconnect() {
			console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
		}
	};
	
	/*let connectedCallback: () => void;
	let timeout: string | number | NodeJS.Timeout | undefined;
	
	return {
		connect() {
			timeout = setTimeout(() => {
				if (connectedCallback) {
					connectedCallback();
				}
			}, 100);
		},
		on(event: string, callback: () => void) {
			// @ts-ignore
			if (connectedCallback) {
				throw Error('Cannot add the handler twice.');
			}
			if (event !== 'connected') {
				throw Error('Only "connected" event is supported.');
			}
			connectedCallback = callback;
		},
		disconnect() {
			clearTimeout(timeout);
		}
	};*/
}