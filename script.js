
//your JS code here. If required.
document.getElementById("btn").addEventListener("click",func);

function func(){
    console.log("Transforming Data with Promise Chaining");
		let val=document.querySelector("#ip").value;
	
	function promise1(val1){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(val1);
			},2000)
		})
	}
	function promise2(val2){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(val2);
			},1000)
		})
	}
	function promise3(val3){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				val3=val3*2;
				resolve(val3);
			},1000)
		})
	}
	function promise4(val4){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				val4=val4-3;
				resolve(val4);
			},1000)
		})
	}
	function promise5(val5){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				val5=val5/2;
				resolve(val5);
			},1000)
		})
	}
	function promise6(val6){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				val6=val6+10;
				resolve(val6);
			},1000)
		})
	}
	function promise7(val7){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(val7);
			},1000)
		})
	}
	promise1(val).then((data1)=>{
		document.querySelector("#output").textContent="Result: "+data1;
		return promise2(data1);
	}).then((data2)=>{
		document.querySelector("#output").textContent="Result: "+data2;
		return promise3(data2);
	}).then((data3)=>{
		document.querySelector("#output").textContent="Result: "+data3;
		return promise4(data3);
	}).then((data4)=>{
		document.querySelector("#output").textContent="Result: "+data4;
		return promise5(data4);
	}).then((data5)=>{
		document.querySelector("#output").textContent="Result: "+data5;
		return promise6(data5);
	}).then((data6)=>{
		document.querySelector("#output").textContent="Result: "+data6;
		return promise7(data6);
	}).then((data7)=>{
		document.querySelector("#output").textContent="Final Result: "+data7;
	}).catch((err)=>{
		cosnole.log("error",err);
	})			
	
	
	
}