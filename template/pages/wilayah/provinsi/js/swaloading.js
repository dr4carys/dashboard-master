
function swal1(status_code,prov,updateProvinsi,refreshToken){
    if (status_code === 200) {
        Swal.fire({
        title: "Berhasil!",
        text: "cool",
        icon: "success",
        confirmButtonText: '<i class="fas fa-tachometer-alt pr-2"></i>Dashboard',
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = prov;
        }
        });
    } else if (status_code === 400) {
        Swal.fire({
        title: "Terjadi Kesalahan",
        text: "cool",
        icon: "error",
        confirmButtonText: "Tutup",
        });
    }else if(status_code === 401){
        refreshToken(updateProvinsi);
    }

}

