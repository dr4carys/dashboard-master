const refreshToken = async (callback) => {
  const fd = new FormData();
  fd.append("XAT", `Bearer ${localStorage.getItem("refresh_token")}`);

  const req = await fetch("https://api.sipandu-beradat.id/token/refresh/", {
    method: "POST",
    body: fd,
  });

  const { status_code, data } = await req.json();

  if (status_code === 200) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
   

  } else if (status_code === 401) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // window.location.href =
    //   "file:///D:/Dwiki/SMT%208/Topik%20Khusus%20TC/Web/dashboard-master/template/pages/login/login.html";
  } else {
    refreshToken(callback);
  }
};
