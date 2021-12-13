import fs from 'fs';

console.log('Day 3');
console.log('-----');
getPartOne();
getPartTwo();

function getPartOne(){
	fs.readFile("/Users/annekurian/Projects/MyProjects/AdventOfCode/day3/input.txt",'utf8',(error,data)=>{
		if(error){
			console.log("Error:"+error)
		}
		let count
		let inp = data.split('\n').map(String);
		let gamma='', epsilon='';
		let len = inp[0].length;
		for (let i=0;i<len;i++){
			let ocr = {};
			let arr = inp.map((b)=> b.charAt(i))
			for(const num of arr){
				ocr[num] = (ocr[num] || 0) + 1
			}
			gamma += ocr[0]>ocr[1]? 0:1;
			epsilon += ocr[0]<ocr[1]? 0:1;
		}
		const gammaDc = parseInt(gamma,2);
		const epsDc = parseInt(epsilon,2);
		const pow = gammaDc * epsDc;
		console.log('Part-1:'+pow)
	})

}

function getPartTwo(){
	fs.readFile("/Users/annekurian/Projects/MyProjects/AdventOfCode/day3/input.txt",'utf8',(error,data)=>{
		if(error){
			console.log("Error:"+error)
		}
		let count
		let inp = data.split('\n').map(String);
		let gamma='', epsilon='';
		let len = inp[0].length;
		for (let i=0;i<len;i++){
			let gcopy = inp;
			let g=0;
			while(gcopy.length >= 1){
				gamma = gcopy[0];
				let garr = gcopy.map((b)=> b.charAt(g))
				let gocr = {};
				for(const num of garr){
					gocr[num] = (gocr[num] || 0) + 1
				}
				let gmost = (gocr[0]<gocr[1] || gocr[0] == gocr[1])? 1:0;
				gcopy = gcopy.filter(b=> {
					if(b.charAt(g) == gmost) return b
				})	
				g++;
			}
		}
		for (let k=0;k<len;k++){	
			let ecopy = inp;
			let e=0;
			while(ecopy.length >= 1){
				epsilon = ecopy[0];
				let earr = ecopy.map((b)=> b.charAt(e));
				let eocr = {};
				for(const num of earr){
					eocr[num] = (eocr[num] || 0) + 1
				}
				let emost = (eocr[0]<eocr[1] || eocr[0] == eocr[1])? 0:1;
				ecopy = ecopy.filter(b=>{
					if(b.charAt(e) == emost) return b
				})
				e++;
			}
		}
		const gammaDc = parseInt(gamma,2);
		const epsDc = parseInt(epsilon,2);
		const pow = gammaDc * epsDc;
		console.log('Part-2:'+pow)
	})

}