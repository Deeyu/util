// 深拷贝 https://www.cnblogs.com/nangxi/p/8603792.html
function clone(obj){
    var copy;
    switch(typeof obj){
        case 'undefined':break;
        case 'number':
        case 'string':
        case 'boolean':
        case 'function':copy = obj;break;
        case 'object':
            if(obj == null) copy = null;
            else if(toString.call(obj) === '[object Array]')
            {
                copy = [];
                for(var i in obj) copy.push(clone(obj[i]));
            }
            else if(toString.call(obj) === '[object RegExp]')
            {
                copy = obj;
            }
            else 
            {
                copy = {};
                for(var j in obj)
                    copy[j]= clone(obj[j]);
            }
    }
    return copy;
}
