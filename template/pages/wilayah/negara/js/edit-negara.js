$("#form-edit-negara").submit(async (e) => {
  e.preventDefault();
  await updateNegara();
});

const updateNegara = async () => {
  $(".preloader1").fadeIn(300);
  const idNegara = $("#edit-id").val();
  const namaNegara = $("#edit-name").val();
  const statusNegara = $("#edit-active-status").val();
  const icon = $("#edit-icon").prop("files");

  const fd = new FormData();
  fd.append("id", idNegara);
  fd.append("name", namaNegara);
  fd.append("active_status", JSON.parse(statusNegara));
  if (icon.length > 0) {
    fd.append("flag", icon[0]);
  }
  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch("https://api.sipandu-beradat.id/negara/update/", {
    method: "POST",
    body: fd,
  });
  const { status_code, data, message } = await req.json();
  $(".preloader1").fadeOut(300);
  swal1(status_code,"negara.html",updateNegara,refreshToken(),message);
};
