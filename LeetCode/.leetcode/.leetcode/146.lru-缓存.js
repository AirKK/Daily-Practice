/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map() //用来存放节点的信息方便删除节点
    this.capacity = capacity
    this.dummyHead = new listNode()
    this.dummyTail = new listNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.pre = this.dummyHead
};
// 移除节点
var removeListNode = function (node){
    node.pre.next = node.next
    node.next.pre = node.pre
}
//将节点加到链表首部
var removeToHead = function (node,head){
    node.next = head.next
    node.pre = head
    head.next.pre = node
    head.next = node
}
//移除链表尾部节点
var removeToTail = function (tail){
    tail.pre = tail.pre.pre
    tail.pre.next =tail
}
class listNode{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
        this.pre = null
    }
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)){
        let temp = this.map.get(key)//暂存节点
        removeListNode(temp) //移除节点
        removeToHead(temp,this.dummyHead)//移动节点至首部
        return temp.value 
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)){
        let temp = this.map.get(key)//暂存节点
        temp.value = value //重新赋值
        removeListNode(temp) //移除节点
        removeToHead(temp,this.dummyHead)//移动节点至首部
        return null
    }
    console.log(this.map.size);
    if(this.map.size>=this.capacity){
        this.map.delete(this.dummyTail.pre.key)
        removeToTail(this.dummyTail)//移除链表尾部节点 
    }
    let temp = new listNode(key,value)
    removeToHead(temp,this.dummyHead)//移动节点至首部  
    this.map.set(key,temp) //存储节点信息
    return null
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

