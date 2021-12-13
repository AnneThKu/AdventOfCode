import fs from 'fs';

console.log('Day 2');
console.log('-----');
getPartOne();
getPartTwo();

function getPartOne(){
	fs.readFile("/Users/annekurian/Projects/MyProjects/AdventOfCode/day2/input.txt",'utf8',(error,data)=>{
		if(error){
			console.log("Error:"+error)
		}
		let input = data.split('\n').map(String);
		let pos =0,depth=0;
		input.forEach(i=>{
			let value;
			if(i.indexOf('forward') > -1) {
				value = i.slice('forward '.length)
				pos += parseInt(value);
			}
			else if(i.indexOf('up') > -1) {
				value = i.slice('up '.length)
				depth -= parseInt(value);
			}
			else if(i.indexOf('down') > -1) {
				value = i.slice('down '.length)
				depth += parseInt(value);
			}
		})
		const finalOne = pos * depth
		console.log('Part-1:'+finalOne)
	})

}

function getPartTwo(){
	fs.readFile("/Users/annekurian/Projects/MyProjects/AdventOfCode/day2/input.txt",'utf8',(error,data)=>{
		if(error){
			console.log("Error:"+error)
		}
		let input = data.split('\n').map(String);
		let pos =0,depth=0,aim=0;
		input.forEach(i=>{
			let value;
			if(i.indexOf('forward') > -1) {
				value = i.slice('forward '.length)
				pos += parseInt(value);
				depth += (aim*value);
			}
			else if(i.indexOf('up') > -1) {
				value = i.slice('up '.length)
				aim -= parseInt(value);
			}
			else if(i.indexOf('down') > -1) {
				value = i.slice('down '.length)
				aim += parseInt(value);
			}
		})
		const finalTwo = pos * depth
		console.log('Part-2:'+finalTwo)
	})

}