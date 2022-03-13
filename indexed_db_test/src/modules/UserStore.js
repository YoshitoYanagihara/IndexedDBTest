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
     * 開く
     */
    open() {
        this.conn = indexedDB.open(dbName, dbVersion);

        // エラー発生
        this.conn.onerror = (error) => {  
            Promise.reject(error);
        };

        // DB更新
        // ※バージョンを指定して開いた時、新しいバージョンが指定されていた場合も通る
        const self = this;
        this.conn.onupgradeneeded = (event) => {
            self.db = event.target.result;

            // Store作成
            // autoIncrementを有効にした'id'と言うカラムをキーとする
            self.db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
    }

    /**
     * 閉じる
     */
    close() {
        if (!this.conn) { return; }
        
        this.db = null;
        
        this.conn.close();
        this.conn = null;
    }
}

export default new UserStore();
