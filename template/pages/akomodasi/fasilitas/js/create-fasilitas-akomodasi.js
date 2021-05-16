$("#form-tambah-fasilitas").submit(async (e) => {
  e.preventDefault();
  await addFasilitas();
});

const addFasilitas = async () => {
  startLoading();

  const name = $("#tambah-fasilitas").val();
  const icon = $("#tambah-icon").prop("files");

  const fd = new FormData();
  fd.append("name", name);

  if (icon.length > 0) {
    fd.append("icon", icon[0]);
  }

  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch("https://api.sipandu-beradat.id/fasilitas/create/", {
    method: "POST",
    body: fd,
  });
  const { status_code, message, data } = await req.json();
  stopLoading();
  swal1(status_code, "fasilitas.html", addFasilitas, refreshToken(), message);
};
