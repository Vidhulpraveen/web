
function createCookie(name, value) {
   var date = new Date();
   date.setTime(date.getTime()+(30*1000));
   var expires = "; expires="+date.toGMTString();

   document.cookie = name+"="+value+"; "+expires+", path=/";
}

function buynow() {
	id = event.srcElement.id;
	val = document.getElementById(id).value;

	//document.cookie = "username=Amparees; expires=Mon, 12 Dec 2022 12:00:00 UTC; path=/";
 
	//document.cookie = "username="+val+"Doe; expires=Mon, 18 Dec 2013 12:00:00 UTC; path=/";

	createCookie ("shoename",val);

}

function addToCart(){
	console.log ("Hello");
	id = event.srcElement.id;

	data = JSON.parse(document.getElementById(id).value);

	console.log(data);
	
	cook = document.cookie;
	console.log("cook: " + cook);
	cook = cook.slice(cook.indexOf("{"))

	let c = 0;
	let cartCookies = []
	let jsonCartCookies = []

	if(cook != ''){
	    cartCookies = JSON.parse(cook.slice(cook.indexOf("{")))
	    
	    for(i of cartCookies['data']){
	        if(i['name'] == data['name']){
	            i['quantity'] += 1
	            c = 1;
	            break;
	        }
	    }
	}

	if(c == 0) {
	    let t = data
	    t['quantity'] = 1

	    if(cartCookies.length == 0){
	        cartCookies.push(t);
	        jsonCartCookies = {"data" : cartCookies}
	    }
	    else{
	        cartCookies['data'].push(t);
	        jsonCartCookies = {"data" : cartCookies['data']}
	    }
	    
	        
	}
	else{
	    jsonCartCookies = {"data" : cartCookies['data']}
	}


	document.cookie = 'cart=' + JSON.stringify(jsonCartCookies) + ';max-age=31536000;';
	alert("ADDED TO THE CART");
}