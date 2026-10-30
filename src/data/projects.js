import petaaksiThumbnail from "../assets/projects/petaAksi_mockup2.jpeg";
import skywatchThumbnail from "../assets/projects/skywatch_mockup.jpeg";

import petaaksiDetail from "../assets/projects/petaAksi_detail.png";
import skywatchDetail from "../assets/projects/Skywatch_predict.png";

export const projects = [
  {
    id: 1,
    thumbnail: petaaksiThumbnail,
    detail: petaaksiDetail,
    name: "PetaAksi",
    category: "WEB APPLICATION",
    subtitle: "Progressive Web App",
    description:
      "Aplikasi untuk pemetaan dan pemantauan insiden aksi massa berdasarkan laporan masyarakat.",
    problem:
      "Informasi aksi massa tersebar di berbagai sumber sehingga masyarakat kesulitan memperoleh informasi lokasi yang terstruktur.",
    solution:
      "Menyediakan peta laporan masyarakat dengan validasi lokasi, dukungan laporan berdasarkan kedekatan spasial, dan moderasi administrator.",
    contribution:
      "Pengembangan aplikasi web, pemetaan laporan, mekanisme verifikasi bertingkat, dan pengujian sistem.",
    technologies: ["React", "Leaflet", "PWA", "Haversine"],
    visualClass: "project-visual-blue",
    demoUrl: "https://petaaksi.vercel.app/",
    githubUrl: "https://github.com/IqbalFadhilah/petaaksi_frontend",
  },
  {
    id: 2,
    thumbnail: skywatchThumbnail,
    detail: skywatchDetail,
    name: "SkyWatch",
    category: "TEAM PROJECT",
    subtitle: "Air Quality Web Application",
    description:
      "Aplikasi web untuk melihat informasi kualitas udara dan hasil prediksi polusi udara.",
    problem:
      "Informasi kualitas udara perlu disajikan dengan cara yang mudah dipahami dan dikaitkan dengan lokasi.",
    solution:
      "Menyajikan informasi kualitas udara melalui antarmuka web dan visualisasi peta dengan dukungan backend prediksi.",
    contribution:
      "Pengembangan frontend dan integrasi dengan backend sesuai kontribusi dalam tim.",
    technologies: [
      "React",
      "Vite",
      "Bootstrap",
      "Leaflet",
      "FastAPI",
    ],
    visualClass: "project-visual-green",
    demoUrl: "https://skyywatchh.netlify.app/",
    githubUrl: "https://github.com/RezaHarahap18/Sky-Watch",
  },
];
