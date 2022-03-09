/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function() {
    this.stack =[]
    this.min 
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length==0) this.min=val
    this.stack.push(val-this.min) //存入当前值与当前最小值的差值
    this.min = (val-this.min)>0? this.min : val //若差值为负更新最小值
    return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top =this.stack[this.stack.length-1]
    if (top<0){
        this.min = this.min - this.stack[this.stack.length-1] //当前存储元素小于0，上一轮的最小值= 当前存储的最小值（this.min）-栈中存储值
    } 
     this.stack.pop()
   return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top =this.stack[this.stack.length-1]
    return top>0? top + this.min : this.min  
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

