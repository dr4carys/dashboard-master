$("#form-tambah-negara").submit(async (e) => {
  e.preventDefault();
  await addNegara();
});

const addNegara = async () => {
  startLoading();
  const name = $("#tambah-name").val();
  const icon = $("#tambah-icon").prop("files");

  const fd = new FormData();
  fd.append("name", name);
  if (icon.length > 0) {
    fd.append("flag", icon[0]);
  }
  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch("https://api.sipandu-beradat.id/negara/create/", {
    method: "POST",
    body: fd,
  });
  const { status_code, data, message } = await req.json();
  stopLoading();
  swal1(status_code, "negara.html", addNegara, refreshToken(), message);
};
