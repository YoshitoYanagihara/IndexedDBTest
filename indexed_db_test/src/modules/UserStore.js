// DB名
const dbName = "users";
// DBバージョン
const dbVersion = 1;
// Store名
const storeName = "userStore";

/**
 * ユーザストアクラス
 */
class UserStore {
    /**
     * コンストラクタ
     */
    constructor() {
        this.conn = null;
        this.db = null;
    }

    /**
     * 全列挙
     */
    async getAll() {
        await this._open();

        const self = this;
        return new Promise((resolve, reject) => {
            const transaction = self.db.transaction(storeName, 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();
            request.onsuccess = (event) => {
                self._close();
                resolve(event.target.result);
            }
            request.onerror = (error) => {
                self._close();
                reject(error);
            }    
        });
    }

    /**
     * 開く
     */
    async _open() {
        const self = this;
        const promise = new Promise((resolve, reject) => {
            self.conn = indexedDB.open(dbName, dbVersion);

            // エラー発生
            self.conn.onerror = (error) => {  
                reject(error);
            };

            // DB更新
            // ※バージョンを指定して開いた時、新しいバージョンが指定されていた場合も通る
            self.conn.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Store作成
                // autoIncrementを有効にした'id'と言うカラムをキーとする
                db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
            }

            // DBが開かれた
            this.conn.onsuccess = (event) => {
                self.db = event.target.result;
                resolve();
            }
        });
        return promise;
    }

    /**
     * 閉じる
     */
    _close() {
        this.db.close();
        this.db = null;
        this.conn = null;
    }
}

export default new UserStore();
