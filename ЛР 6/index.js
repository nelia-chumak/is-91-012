const http = require('http')

http.createServer((req,res)=>{

	res.setHeader("Content-Type","text/html; charset=utf-8;");

	if(req.url === "/" || req.url === "/home"){
		res.write('<h1>Main Page</h1>');
	}
    else if(req.url === "/about"){
		res.write('<h2>About</h2>');
	}
    else if(req.url === "/contact"){
		res.write('<h2>Contact</h2>');
	}
	else if(req.url === "/is-91-012"){
		res.write('<h2>Куник Неля IC-91 2 курс</h2>');
	}
	else{
		res.write('<h2>This page is not found</h2>');
	}
	res.end();
}).listen(3000);