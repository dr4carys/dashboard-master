$("#form-pelaporan").submit(async (e) => {
  e.preventDefault();
  await readAllPelaporan();
});
// const masyarakat_badges = [
//   "<label class='badge badge-dark'>Krama</label>",
//   "<label class='badge badge-info'>Tamu</label>",
// ];
// const emergency_status_badges = [
//   "<label class='badge badge-info'>Keluhan</label>",
//   "<label class='badge badge-primary-red'>Darurat</label>",
// ];
// const status_texts = [
//   "Tidak Valid",
//   "Menunggu Validasi",
//   "Sedang Diproses",
//   "Selesai",
// ];
// const status_badges = [
//   "<label class='badge badge-primary-red'>Tidak Valid</label>",
//   "<label class='badge badge-primary-orange'>Menunggu Validasi</label>",
//   "<label class='badge badge-info'>Sedang Diproses</label>",
//   "<label class='badge badge-success'>Selesai</label>",
// ];


// $(document).ready(async () => {
//   await readAllPelaporan();
//   const darurats = await readPelaporanDarurat();
//   const keluhans = await readPelaporan();
//   const keluhanTamus = await readPelaporanTamu();
//   const daruratTamus = await readPelaporanDaruratTamu();
//   const data1 = [...darurats, ...keluhans, ...keluhanTamus, ...daruratTamus];
//   // const peldar = await readPelaporanDarurat();
//   var grades = {};

//   data = data1.filter((obj, pos, arr) => {
//     return arr.map(mapObj =>
//           mapObj.desa_adat.name).indexOf(obj.desa_adat.name) == pos;
//     });
//   // console.log(data);

//   data.map((obj)=>{
//     const option = `<option value="${obj.desa_adat.id}">${obj.desa_adat.name}</option>`;
//     $("#kategori-desa-adat").append(option);
//   })

// });

// const readPelaporanDarurat = async () => {
//   const req = await fetch("https://api.sipandu-beradat.id/pelaporan-darurat/");
//   const { status_code, data } = await req.json();
//   // $(".preloader").fadeOut(300);
//   if (status_code === 200) {
//     return data;
//   } else {
//     readPelaporanDarurat();
//   }
// };

// const readPelaporan = async () => {
//   const req = await fetch("https://api.sipandu-beradat.id/pelaporan/");
//   const { status_code, data } = await req.json();
//   $(".preloader").fadeOut(300);
//   if (status_code === 200) {
//     return data;
//   } else {
//     readPelaporan();
//   }
// };

// const readPelaporanTamu = async () => {
//   const req = await fetch("https://api.sipandu-beradat.id/pelaporan-tamu/");
//   const { status_code, data } = await req.json();
//   $(".preloader").fadeOut(300);
//   if (status_code === 200) {
//     return data;
//   } else {
//     readPelaporanTamu();
//   }
// };

// const readPelaporanDaruratTamu = async () => {
//   const req = await fetch(
//     "https://api.sipandu-beradat.id/pelaporan-darurat-tamu/"
//   );
//   const { status_code, data } = await req.json();
//   $(".preloader").fadeOut(300);
//   if (status_code === 200) {
//     stopLoading();
//     return data;
//   } else {
//     readPelaporanDaruratTamu();
//   }
// };

// const readAllPelaporan = async () => {
//   startLoading();
//   const darurats = await readPelaporanDarurat();
//   const keluhans = await readPelaporan();
//   const keluhanTamus = await readPelaporanTamu();
//   const daruratTamus = await readPelaporanDaruratTamu();
//   const kategori_pelapor = $("#kategori-pelapor option:selected").text();
//   const kategori_pelaporan = $("#kategori-pelaporan").val();
//   const kategori_desa_adat =  $("#kategori-desa-adat option:selected").text();
//   const statusAktif = $("#status_aktif ").val()
//   console.log(kategori_pelapor)
//   console.log(kategori_pelaporan)
//   console.log(kategori_desa_adat)
//   var arraysemen =[]
//   var dataArray =[kategori_desa_adat,kategori_pelaporan,statusAktif]
//   console.log(Boolean(Number(kategori_pelaporan)))
  

//   const data = [...darurats, ...keluhans, ...keluhanTamus, ...daruratTamus];
 
//   if(kategori_pelapor == "Pilih kategori pelapor" && kategori_pelaporan == "c"
//       && kategori_pelaporan == "c" && statusAktif == "c"){
//     data1 = data
//   }else{
//         for(var c =0; c<dataArray.length;c++){
//           if(dataArray[c] !== "c" && dataArray[c]!=="Pilih kategori pelapor" && dataArray[c] !=="Pilih Kategori Desa Adat" ){
//             console.log("log ke",dataArray[c])
//             arraysemen.push(c)
//             console.log("log ke1234",arraysemen)
//           }
        
//       }
//       console.log("panjgan kl",arraysemen)
//       for (var b =0 ; b<arraysemen.length;b++){
//         // console.log("KLEE")
//         if(b===0){
//           console.log("KLEE")
//           data1 = data.filter(function filterss(data){
//             console.log("KLEE122")
//             var arrayreturn = [data.desa_adat.name == kategori_desa_adat  ,data.jenis_pelaporan.emergency_status == Boolean(Number(kategori_pelaporan)),
//               data.status == statusAktif]
//             console.log("sss",dataArray)
//             return arrayreturn[arraysemen[b]]
           
//           });
//           console.log("data1",data1)
//         }else{
//           console.log("data12",data1)
//           data1 = data1.filter(function filterss(data){
        
//             var arrayreturn = [data.desa_adat.name == kategori_desa_adat  ,data.jenis_pelaporan.emergency_status == Boolean(Number(kategori_pelaporan)),
//               data.status == statusAktif]
//             console.log("sss",dataArray)
//             return arrayreturn[arraysemen[b]]
           
//           });
          
//         }
//       }

//   }
//   console.log(data1)
//   $(".table-datatable").DataTable({
//     destroy:true,
//     fixedHeader: {
//       header: true,
//       footer: true,
//     },
//     columnDefs: [{ orderable: false, targets: [8] }],
//     data: data1.map((obj, i) => [
//       i + 1,
//       obj.masyarakat ? obj.masyarakat.name : obj.tamu.name,
//       masyarakat_badges[obj.masyarakat ? 0 : 1],
//       obj.jenis_pelaporan.name,
//       emergency_status_badges[Number(obj.jenis_pelaporan.emergency_status)],
//       obj.desa_adat.name,
//       status_badges[obj.status + 1],
//       obj.time,
//       `<div class="container-crud">
//       <a href="detail-pelaporan.html?title=${obj.title}&name=${
//         obj.masyarakat ? obj.masyarakat.name : obj.tamu.name
//       }&gender=${
//         obj.masyarakat
//           ? obj.masyarakat.gender === "l"
//             ? "Laki-laki"
//             : "Perempuan"
//           : obj.tamu.gender === "l"
//           ? "Laki-laki"
//           : "Perempuan"
//       }&phone=${
//         obj.masyarakat ? obj.masyarakat.phone : obj.tamu.phone
//       }&avatar=${
//         obj.masyarakat ? obj.masyarakat.avatar : obj.tamu.avatar
//       }&status=${obj.status}&jenis-pelaporan=${
//         obj.jenis_pelaporan.name
//       }&category=${obj.masyarakat ? "Krama" : "Tamu"}&description=${
//         obj.description
//       }&photo=${obj.photo}&desa-adat=${obj.desa_adat.name}&kecamatan=${
//         obj.desa_adat.kecamatan.name
//       }&kabupaten=${obj.desa_adat.kecamatan.kabupaten.name}&time=${
//         obj.time
//       }&emergency-status=${obj.jenis_pelaporan.emergency_status}&latitude=${
//         obj.latitude
//       }&longitude=${
//         obj.longitude
//       }" class="btn btn-inverse-success btn-rounded btn-icon btn-action mr-2 btn-detail" title="Detail" >
// <i class="mdi mdi-dots-horizontal"></i>
//       </a>
//   </div>`,
//     ]),
//   });
// };

// const masyarakat_badges = [
// 	"<label class='badge badge-dark'>Krama</label>",
// 	"<label class='badge badge-info'>Tamu</label>",
// ];
// const emergency_status_badges = [
// 	"<label class='badge badge-info'>Keluhan</label>",
// 	"<label class='badge badge-primary-red'>Darurat</label>",
// ];
// const status_texts = [
// 	"Tidak Valid",
// 	"Menunggu Validasi",
// 	"Sedang Diproses",
// 	"Selesai",
// ];
// const status_badges = [
// 	"<label class='badge badge-primary-red'>Tidak Valid</label>",
// 	"<label class='badge badge-primary-orange'>Menunggu Validasi</label>",
// 	"<label class='badge badge-info'>Sedang Diproses</label>",
// 	"<label class='badge badge-success'>Selesai</label>",
// ];

// $(document).ready(async () => {
// 	await readAllPelaporan();
// });

// const readPelaporanDarurat = async () => {
// 	startLoading()
// 	const idDesa = localStorage.getItem("id_desa");
// 	const req = await fetch(`https://api.sipandu-beradat.id/pelaporan-darurat/?id_desa=${idDesa}`);
// 	const {
// 		status_code,
// 		data
// 	} = await req.json();

// 	if (status_code === 200) {
// 		return data;
// 	} else {
// 		readPelaporanDarurat();
// 	}
// };

// const readPelaporan = async () => {
// 	startLoading()
// 	const idDesa = localStorage.getItem("id_desa");
// 	const req = await fetch(`https://api.sipandu-beradat.id/pelaporan/?id_desa=${idDesa}`);
// 	const {
// 		status_code,
// 		data
// 	} = await req.json();

// 	if (status_code === 200) {
// 		return data;
// 	} else {
// 		readPelaporan();
// 	}
// };

// const readPelaporanTamu = async () => {
// 	startLoading()
// 	const idDesa = localStorage.getItem("id_desa");
// 	const req = await fetch(`https://api.sipandu-beradat.id/pelaporan-tamu/?id_desa=${idDesa}`);
// 	const {
// 		status_code,
// 		data
// 	} = await req.json();

// 	if (status_code === 200) {
// 		return data;
// 	} else {
// 		readPelaporanTamu();
// 	}
// };

// const readPelaporanDaruratTamu = async () => {
// 	startLoading()
// 	const idDesa = localStorage.getItem("id_desa");
// 	const req = await fetch(
// 		`https://api.sipandu-beradat.id/pelaporan-darurat-tamu/?id_desa=${idDesa}`
// 	);
// 	const {
// 		status_code,
// 		data
// 	} = await req.json();

// 	if (status_code === 200) {
// 		return data;
// 	} else {
// 		readPelaporanDaruratTamu();
// 	}
// };

// const readAllPelaporan = async () => {
// 	const darurats = await readPelaporanDarurat();
// 	const keluhans = await readPelaporan();
// 	const keluhanTamus = await readPelaporanTamu();
// 	const daruratTamus = await readPelaporanDaruratTamu();
// 	const data = [...darurats, ...keluhans, ...keluhanTamus, ...daruratTamus];

// 	$(".table-datatable").DataTable({
// 		destroy: true,
// 		fixedHeader: {
// 			header: true,
// 			footer: true,
// 		},
// 		columnDefs: [{
// 			orderable: false,
// 			targets: [8]
// 		}],
// 		data: data.map((obj, i) => [
// 			i + 1,
// 			obj.masyarakat ? obj.masyarakat.name : obj.tamu.name,
// 			masyarakat_badges[obj.masyarakat ? 0 : 1],
// 			obj.jenis_pelaporan.name,
// 			emergency_status_badges[Number(obj.jenis_pelaporan.emergency_status)],
// 			obj.desa_adat.name,
// 			status_badges[obj.status + 1],
// 			obj.time,
// 			`<div class="container-crud">
// 		 		<a href="detail-pelaporan.html?id_pelaporan=${obj.id}&jenis-krama=${obj.masyarakat ? 0 : 1}&emergency-status=${Number(obj.jenis_pelaporan.emergency_status)}" 
// 					class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-detail" title="Detail">
//  						<i class="mdi mdi-file-document-box"></i>
// 		 		</a>
// 			</div>`,
// 		]),
// 	});
// 	stopLoading();
// };

const masyarakat_badges = [
	"<label class='badge badge-dark'>Krama</label>",
	"<label class='badge badge-info'>Tamu</label>",
];
const emergency_status_badges = [
	"<label class='badge badge-info'>Keluhan</label>",
	"<label class='badge badge-primary-red'>Darurat</label>",
];
const status_texts = [
	"Tidak Valid",
	"Menunggu Validasi",
	"Sedang Diproses",
	"Selesai",
];
const status_badges = [
	"<label class='badge badge-primary-red'>Tidak Valid</label>",
	"<label class='badge badge-primary-orange'>Menunggu Validasi</label>",
	"<label class='badge badge-info'>Sedang Diproses</label>",
	"<label class='badge badge-success'>Selesai</label>",
];

$(document).ready(async () => {
	const data1 = await readAllPelaporan();
  
  
});

const readPelaporanDarurat = async () => {
	startLoading()
	const idDesa = localStorage.getItem("id_desa");
	const req = await fetch(`https://api.sipandu-beradat.id/pelaporan-darurat/?id_desa=${idDesa}`);
	const {
		status_code,
		data
	} = await req.json();

	if (status_code === 200) {
		return data;
	} else {
		readPelaporanDarurat();
	}
};

const readPelaporan = async () => {
	startLoading()
	const idDesa = localStorage.getItem("id_desa");
	const req = await fetch(`https://api.sipandu-beradat.id/pelaporan/?id_desa=${idDesa}`);
	const {
		status_code,
		data
	} = await req.json();

	if (status_code === 200) {
		return data;
	} else {
		readPelaporan();
	}
};

const readPelaporanTamu = async () => {
	startLoading()
	const idDesa = localStorage.getItem("id_desa");
	const req = await fetch(`https://api.sipandu-beradat.id/pelaporan-tamu/?id_desa=${idDesa}`);
	const {
		status_code,
		data
	} = await req.json();

	if (status_code === 200) {
		return data;
	} else {
		readPelaporanTamu();
	}
};

const readPelaporanDaruratTamu = async () => {
	startLoading()
	const idDesa = localStorage.getItem("id_desa");
	const req = await fetch(
		`https://api.sipandu-beradat.id/pelaporan-darurat-tamu/?id_desa=${idDesa}`
	);
	const {
		status_code,
		data
	} = await req.json();

	if (status_code === 200) {
		return data;
	} else {
		readPelaporanDaruratTamu();
	}
};

const readAllPelaporan = async () => {
	const darurats = await readPelaporanDarurat();
	const keluhans = await readPelaporan();
	const keluhanTamus = await readPelaporanTamu();
	const daruratTamus = await readPelaporanDaruratTamu();
  const kategori_pelapor = $("#kategori-pelapor option:selected").text();
  const kategori_pelaporan = $("#kategori-pelaporan").val();
  const kategori_desa_adat =  $("#kategori-desa-adat option:selected").text();
  const statusAktif = $("#status_aktif ").val()
  console.log(kategori_pelapor)
  console.log(kategori_pelaporan)
  console.log(kategori_desa_adat)
  var arraysemen =[]
  var dataArray =[kategori_desa_adat,kategori_pelaporan,statusAktif]
  console.log(Boolean(Number(kategori_pelaporan)))
	const data = [...darurats, ...keluhans, ...keluhanTamus, ...daruratTamus];
  data1 = data.filter((obj, pos, arr) => {
    return arr.map(mapObj =>
          mapObj.desa_adat.name).indexOf(obj.desa_adat.name) == pos;
    });
  // console.log(data);

  data1.map((obj)=>{
    const option = `<option value="${obj.desa_adat.id}">${obj.desa_adat.name}</option>`;
    $("#kategori-desa-adat").append(option);
  })

  if(kategori_pelapor == "Pilih kategori pelapor" && kategori_pelaporan == "c"
      && kategori_pelaporan == "c" && statusAktif == "c"){
    data2 = data
  }else{
        for(var c =0; c<dataArray.length;c++){
          if(dataArray[c] !== "c" && dataArray[c]!=="Pilih kategori pelapor" && dataArray[c] !=="Pilih Kategori Desa Adat" ){
            console.log("log ke",dataArray[c])
            arraysemen.push(c)
            console.log("log ke1234",arraysemen)
          }
        
      }
      console.log("panjgan kl",arraysemen)
      for (var b =0 ; b<arraysemen.length;b++){
        // console.log("KLEE")
        if(b===0){
          console.log("KLEE")
          data2 = data.filter(function filterss(data){
            console.log("KLEE122")
            var arrayreturn = [data.desa_adat.name == kategori_desa_adat  ,data.jenis_pelaporan.emergency_status == Boolean(Number(kategori_pelaporan)),
              data.status == statusAktif]
            console.log("sss",dataArray)
            return arrayreturn[arraysemen[b]]
           
          });
          console.log("data1",data1)
        }else{
          console.log("data12",data1)
          data2 = data2.filter(function filterss(data){
        
            var arrayreturn = [data.desa_adat.name == kategori_desa_adat  ,data.jenis_pelaporan.emergency_status == Boolean(Number(kategori_pelaporan)),
              data.status == statusAktif]
            console.log("sss",dataArray)
            return arrayreturn[arraysemen[b]]
           
          });
          
        }
      }

  }

	$(".table-datatable").DataTable({
		destroy: true,
		fixedHeader: {
			header: true,
			footer: true,
		},
		columnDefs: [{
			orderable: false,
			targets: [8]
		}],
		data: data2.map((obj, i) => [
			i + 1,
			obj.masyarakat ? obj.masyarakat.name : obj.tamu.name,
			masyarakat_badges[obj.masyarakat ? 0 : 1],
			obj.jenis_pelaporan.name,
			emergency_status_badges[Number(obj.jenis_pelaporan.emergency_status)],
			obj.desa_adat.name,
			status_badges[obj.status + 1],
			obj.time,
			`<div class="container-crud">
		 		<a href="detail-pelaporan.html?id_pelaporan=${obj.id}&jenis-krama=${obj.masyarakat ? 0 : 1}&emergency-status=${Number(obj.jenis_pelaporan.emergency_status)}" 
					class="btn btn-inverse-primary btn-rounded btn-icon btn-action mr-2 btn-detail" title="Detail">
 						<i class="mdi mdi-file-document-box"></i>
		 		</a>
			</div>`,
		]),
	});
	stopLoading();
};