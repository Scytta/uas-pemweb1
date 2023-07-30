// Fungsi untuk mengambil waktu saat ini dan menampilkannya dalam format hh:mm:ss
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = timeString;
  }

  // Memperbarui jam setiap 1 detik
  setInterval(updateClock, 1000);

//   soal
const pertanyaan = {
	data:[
		{
			no:1,
			soal:"Dengarkan <i>audio</i> berikut ini",
			pilgan:["He'll correct the exams this afternoon.","The exam will be at noon.","He will collect the exams at 12:00.","The tests will be graded by noon."],
			link:"assets/LATIHAN SOAL TOEFL LISTENING - 1 (320 kbps).mp3"
		},
		{
			no:2,
			soal:"Dengarkan <i>audio</i> berikut ini",
			pilgan:["sdfsdfsdf","dasfdsdsf","sdfsdfs"],
			link:"jlknlknlkn"
		},

	]
}

const {data} = pertanyaan
function mapping(urutan){

	console.log(data);
	const no = document.getElementById("no");
	const soal = document.getElementById("soal");
	const pilgan = document.getElementsByClassName("pilgan");


	no.innerHTML = data[urutan].no
	soal.innerHTML = data[urutan].soal

	data[urutan].pilgan.forEach((element,index) => {
		pilgan[index].innerHTML = element
	}); 

}

function counter() {
	const value = localStorage.getItem("hal")
	let urutan = parseInt(value)
    urutan++

	if (urutan<data.length) {
	    localStorage.setItem("hal",urutan)
	    mapping(urutan)
	}else alert("Done")
}



function main() {
	localStorage.setItem("hal",0)
	mapping(0)
}

main()