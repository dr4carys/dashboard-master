$("#form-tambah-jenis-instansi").submit(async (e) => {
  e.preventDefault();
  await addJenisInstansi();
});

const addJenisInstansi = async () => {
  const name = $("#tambah-jenis-instansi").val();

  const fd = new FormData();
  fd.append("name", name);
  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch(
    "https://api.sipandu-beradat.id/jenis-instansi-petugas/create/",
    {
      method: "POST",
      body: fd,
    }
  );
  const { status_code, data, message } = await req.json();

  swal1(status_code,"jenis-instansi.html",addJenisInstansi,refreshToken(),message);

};
