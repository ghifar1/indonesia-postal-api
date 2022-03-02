// const { default: axios } = require("axios");

// const URL_API = "https://sig.bps.go.id/rest-bridging-pos/getwilayah";
// const OUTPUT_DIR = "src/bps";

// function citiesQuery(parent) {
// 	return URL_API + "/level=kabupaten&parent=" + parent;
// }

// function districtsQuery(parent) {
// 	return URL_API + "/level=kecamatan&parent=" + parent;
// }

// function villagesQuery(parent) {
// 	return URL_API + "/level=desa&parent=" + parent;
// }

// function csvWriter(data, parent = "") {
// 	let csvContent = "";

// 	//header
// 	csvContent = "kode";
// }

// async function getData() {
// 	let provinces = [];
// 	let cities = [];
// 	let districts = [];
// 	let villages = [];

// 	//get provinces first
// 	try {
// 		provinces = (await axios.get(URL_API)).data;
// 	} catch (err) {
// 		console.log(err.response);
// 	}

// 	//iterate provinces
// 	provinces.forEach((data) => {
// 		console.log(data);
// 	});
// }

// getData();
