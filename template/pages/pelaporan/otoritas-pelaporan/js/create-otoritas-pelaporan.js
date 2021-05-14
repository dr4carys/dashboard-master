$("#form-tambah-otoritas-pelaporan").submit(async (e) => {
  e.preventDefault();
  await addOtoritasPelaporan();
});

const addOtoritasPelaporan = async () => {
  $(".preloader1").fadeIn(300);
  const namaInstansi = $("#tambah-instansi").val();
  const jenisPelaporan = $("#tambah-jenis-pelaporan").val();

  const fd = new FormData();
  fd.append("id_instansi", namaInstansi);
  fd.append("id_jenis_pelaporan", jenisPelaporan);
  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch(
    "https://api.sipandu-beradat.id/otoritas-pelaporan-instansi/create/",
    {
      method: "POST",
      body: fd,
    }
  );
  $(".preloader1").fadeOut(300);
  const { status_code, message, data } = await req.json();
  swal1(status_code,"otoritas-pelaporan.html",addOtoritasPelaporan,refreshToken(),message);
  
};
