class Students {
	constructor(data) {
		this.hobbies = {};
		this.name_student = {};
		this.majors = {};
		this.number = 0;

		for (let st of data) {
			let name = st.name.first + " " + st.name.last;
			let hobby = st.interests;
			for (let h of hobby) {
				this.number += 1;
				if (!this.hobbies[h]) {
					this.hobbies[h] = [];
				}
				this.hobbies[h].push(name);
			}
			let major = st.major;
			if (!this.majors[major]) {
				this.majors[major] = [];
			}
			this.majors[major].push(name);

			this.name_student[name] = st;
			this.name_student[name].name = name;
		}
	}

	quantity(){
		return this.number;
	}

	clickHobbits(h){
		const input = document.getElementById("search-interest");
		input.value=h;
	}

	show_student(st){
		const classesToAdd = "col-12 col-md-6 col-lg-3".split(" ");
		const element = document.createElement("div");
		element.style.marginLeft = "10px";
		element.style.marginRight = "10px";
		const name = document.createElement("h2");
		name.innerText = st.name;
		const major = document.createElement("p");
		const strong = document.createElement("strong");
		strong.innerText = st.major;
		major.appendChild(strong);
		const intro = document.createElement("p");
		intro.innerText = st.name + " is taking "+ st.numCredits +" credits and " + ((st.fromWisconsin)?" not ":"") +"from wisconsin."
		const likes = document.createElement("p");
		likes.innerText = "who likes:";
		const hobbies = document.createElement("ul");
		for(let h of st.interests){
			const l = document.createElement("li");
			l.innerText = h;
			l.addEventListener("click",()=>this.clickHobbits(h));// 传递一个函数而非调用函数
			hobbies.appendChild(l);
		}
		element.appendChild(name);
		element.appendChild(major);
		element.appendChild(document.createElement("br"));
		element.appendChild(intro);
		element.appendChild(likes);
		element.appendChild(hobbies);
		element.classList.add(classesToAdd);
		return element;
	}

	show_students(sts){
		for(let s of sts){
			let tmp = this.show_student(s);
			document.getElementById("students").appendChild(tmp);
		}
	}
}

let STUDENTS;
fetch("https://cs571.org/api/s24/hw2/students", {
	headers: {
		"X-CS571-ID": "bid_fa_bb0bba617230837b1191c58d3ef68928dc448afd429cc0000459a20d5988fff7"
	}
})
.then(res => {
	if (res.status === 200 || res.status === 304) {
		return res.json()
	} else {
		throw new Error();
	}
})
.then(data => {
	let students = new Students(data);
	STUDENTS = students;
	document.getElementById("num-results").innerText = students.quantity();
	let sts = Object.values(students.name_student);
	students.show_students(sts);
	// document.getElementById("students").appendChild(students.show_students());
})




function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	// TODO Implement the search
	const input_name = document.getElementById("search-name").value.trim().toLowerCase();       //.trim()去除前后空格
    const input_major = document.getElementById("search-major").value.trim().toLowerCase();    
	const input_interest = document.getElementById("search-interest").value.trim().toLowerCase();
    
	const filtered_students = Object.values(STUDENTS.name_student).filter(st => {
		const name =  st.name.split(' ').join('').toLowerCase();
		const major = st.major.split(' ').join('').toLowerCase();
		const interests = st.interests.map(h => h.trim().toLowerCase());
		return (
			name.includes(input_name) &&
			major.includes(input_major) &&
			interests.some(interest => interest.includes(input_interest))
		);
	});
	console.log(filtered_students);

	document.getElementById("students").innerText = "";
	STUDENTS.show_students(filtered_students);

}

document.getElementById("search-btn").addEventListener("click", handleSearch);
