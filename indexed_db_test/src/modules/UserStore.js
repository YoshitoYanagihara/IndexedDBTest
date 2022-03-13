// DB名
const dbName = "users";

/**
 * ユーザストアクラス
 */
class UserStore {
    /**
     * コンストラクタ
     */
    constructor() {
        this.conn = null;
    }

    /**
     * 開く
     */
    open() {
        this.conn = indexedDB.open(dbName);
        this.conn.onerror = (error) => {  
            Promise.reject(error);
        };
    }

    /**
     * 閉じる
     */
    close() {
        if (!this.conn) { return; }
        
        this.conn.close();
        this.conn = null;
    }
}

export default new UserStore();
