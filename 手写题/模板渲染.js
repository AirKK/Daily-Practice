function render(template, context) {
    return template.replace(/\{\{(.*?)\}\}/g,(match,key)=>{
        let arr =key.split('.')
        return arr.reduce((pre,cur)=>{
            return pre[cur.trim()]
        },context)
    })
}

const template = "{{name}}很厉害，才{{age }}岁,就可以帮{{person.father}}做事,{{deep.a.b}}";

const context = { name: "marcKun", age: "22" ,person:{father:'父亲'},deep:{a:{b:'减轻家里负担'}} }

console.log(render(template, context));//marcKun很厉害，才22岁,就可以帮父亲做事,减轻家里负担