interface ICacheItem {
	mtime: Number;
	content: String;
}

interface IFileCache {
	set: (key: String, value: ICacheItem) => void;
	get: (key: String) => ICacheItem;
}

class FileCache implements IFileCache {
	store = new Map();

	set (key: String, value: ICacheItem): void {
		this.store.set(key, value);
	}

	get (key: String): ICacheItem {
		return this.store.get(key);
	}
}