/**
 * @param {number} capacity
 */
 var LRUCache = function (capacity) {
    this.capacity = capacity
    this.useStack = new Map
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (key in this) {
        this.useStack.delete(key)
        this.useStack.set(key)  //使用后将元素放入队列末尾，map是由顺序的，按插入顺序
        return this[key]
    }
    else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (key in this) {
        this[key] = value //存在则更新值
        this.useStack.delete(key)
        this.useStack.set(key)  //使用后将元素放入队列末尾
        return null
    }
    else {
        console.log(this.useStack.size);
        if (this.useStack.size < this.capacity) {
            this[key] = value
            this.useStack.set(key)
            return null
        }
        else {
            delete this[this.useStack.keys().next().value] //删除最久未使用过的元素(map开头的元素)
            this[key] = value //重新赋值
            this.useStack.delete(this.useStack.keys().next().value)
            this.useStack.set(key)  //使用后将元素放入队列开头
            return null
        }
    }

};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */