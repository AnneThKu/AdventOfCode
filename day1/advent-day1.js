import fs from 'fs';
		
console.log('Day 1');
console.log('-----');
getPartOne();
getPartTwo();

function getPartOne(){
	fs.readFile("/Users/annekurian/Projects/MyProjects/AdventOfCode/day1/input.txt",'utf8',(error,data)=>{
		if(error){
			console.log("Error:"+error)
		}
		let input = data.split('\n').map(Number);
		var count=0;
		input.forEach((i,n)=>{
			if(n!=0 && i > input[n-1]) count++;
		})	
		console.log('Part-1:'+count)
	})

}

function getPartTwo(){
	fs.readFile("/Users/annekurian/Projects/MyProjects/AdventOfCode/day1/input.txt",'utf8',(error,data)=>{
		if(error){
			console.log("Error:"+error)
		}
		let input = data.split('\n').map(Number);
		let sumArr = input.map((i,n) => i+input[n+1]+input[n+2])
		var count=0;
		sumArr.forEach((i,n)=>{
			if(n!=0 && i > sumArr[n-1]) count++;
		})	
		console.log('Part-2:'+count)
	})

}