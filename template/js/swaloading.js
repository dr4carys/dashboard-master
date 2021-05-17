function swal1(status_code, prov, updateProvinsi, refreshToken, message) {
  if (status_code === 200) {
    Swal.fire({
      title: "Berhasil!",
      text: message,
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = prov;
      }
    });
  } else if (status_code === 400) {
    Swal.fire({
      title: "Terjadi Kesalahan",
      text: message,
      icon: "error",
      confirmButtonText: "Tutup",
    });
  } else if (status_code === 401) {
    // console.log("hh")
    // Swal.fire({
    // title: "Terjadi Kesalahan",
    // text: message,
    // icon: "error",
    // confirmButtonText: "Tutup",
    // });
    refreshToken();
  }
}
