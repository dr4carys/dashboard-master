$("#form-tambah-super-admin").submit(async (e) => {
  e.preventDefault();
  await addPegawaiAkomodasi();
});

const addPegawaiAkomodasi = async () => {
  $(".preloader1").fadeIn(300);
  const id_akomodasi = $("#edit-id").val();
  const name = $("#admin-name").val();
  const phone = $("#admin-telp").val();
  const date_of_birth = $("#admin-tgl-lahir").val();
  const nik = $("#admin-nik").val();
  const gender = $("#admin-jenis-kelamin").val();
  const avatar = $("#admin-profil-pic").prop("files");

  const fd = new FormData();
  fd.append("id_akomodasi", id_akomodasi);
  fd.append("name", name);
  fd.append("phone", phone);
  fd.append("date_of_birth", date_of_birth);
  fd.append("nik", nik);
  fd.append("gender", gender);

  if (avatar.length > 0) {
    fd.append("avatar", avatar[0]);
  }

  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req = await fetch(
    "https://api.sipandu-beradat.id/pegawai-akomodasi/create/",
    {
      method: "POST",
      body: fd,
    }
  );
  const { status_code, message, data } = await req.json();
  $(".preloader1").fadeOut(300);
  if (status_code === 200) {
    addSuperAdminAkomodasi(data.id);
  } else if (status_code === 400) {
    alert(message);
  } else if (status_code === 401) {
    refreshToken(addPegawaiAkomodasi);
  }
};

const addSuperAdminAkomodasi = async (id) => {
  $(".preloader1").fadeIn(300);
  const username = $("#admin-username").val();
  const password = $("#admin-password").val();

  const fd = new FormData();
  fd.append("id_pegawai", id);
  fd.append("username", username);
  fd.append("password", password);
  fd.append("XAT", `Bearer ${localStorage.getItem("access_token")}`);

  const req2 = await fetch(
    "https://api.sipandu-beradat.id/admin-akomodasi/create/",
    {
      method: "POST",
      body: fd,
    }
  );
  const { status_code, message } = await req2.json();
  $(".preloader1").fadeOut(300);
  if (status_code === 200 || status_code === 400) {
    alert(message);
  } else if (status_code === 401) {
    refreshToken(() => addSuperAdminAkomodasi(id));
  }
};
