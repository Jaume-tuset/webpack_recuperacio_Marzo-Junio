import { getProfile, isLogged } from "../services/users.js";

export { menuTemplate };

function menuTemplate() {
  let menuTemplate = document.createElement("div");
  menuTemplate.id = "header";
  menuTemplate.classList.add("container");
  menuTemplate.innerHTML = `<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-brand text-white" href="#"><i class="fa fa-graduation-cap fa-lg mr-2"></i>CINEMA</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nvbCollapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item pl-1">
                <a class="nav-link" href="#">
                    <i class="fa fa-home fa-fw mr-1">
                    </i>Peliculas</a>
            </li>
            <li class="nav-item active pl-1">
                <a class="nav-link" href="#"><i class="fa fa-th-list fa-fw mr-1"></i>Catalogo</a>
            </li>
            <li class="nav-item pl-1">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Genero</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#scrollspyHeading3">Acción</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading4">Aventura</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading5">Terror</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading6">Ciencia Ficción</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading7">Romantica</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading8">Comedia</a></li>
                    </ul>
                </li>
            </li>
            <li class="nav-item pl-1">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Plataforma</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#scrollspyHeading3">NETFLIX</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading4">HBO</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading5">AMAZON</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading6">DAZAN</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading7">RAKUTEN TV</a></li>
                        <li><a class="dropdown-item" href="#scrollspyHeading8">PARAMOUNT CHANNEL</a></li>
                    </ul>
                </li>
            </li>
             ${
               !isLogged()
                 ? `
      <li class="nav-item">
      <a class="nav-link" href="#/login">Login</a>
    </li>
    `
                 : ""
             }
    ${
      !isLogged()
        ? `
    <li class="nav-item">
    <a class="nav-link" href="#/register">Sign Up</a>
  </li>
  `
        : ""
    }
  ${
    isLogged()
      ? `
        <li class="nav-item">
          <a class="nav-link"  href="#/logout">Logout</a>
        </li>
        <li class="nav-item">
        <a class="nav-link"  href="#/profile">Profile</a>
      </li>
   
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img id="avatar_navbar" src="" width="30" height="30" class="rounded-circle">
        </a>
      </li>   
      `
      : ""
  }
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
  `;
  if (isLogged()) {
    getProfile().then((dataProfile) => {
      dataProfile = dataProfile[0];
      console.log(dataProfile);
      menuTemplate.querySelector("#avatar_navbar").src =
        dataProfile.avatar_blob;
    });
  }

  return menuTemplate;
}
