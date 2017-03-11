console.log("try")
var jsondata = require('./items.json')
var array = jsondata.items

for (var i = 0; i< array.length; i++){
	item = array[i]
 console.log("type: " + item.category) 


}
    
    
