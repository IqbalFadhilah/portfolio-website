
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
    category: "PERSONAL PROJECT",
    subtitle: "Progressive Web App for Mass Demonstration Incident Mapping",

    description:
      "PetaAksi is a Progressive Web App (PWA) designed to map and monitor mass demonstration incidents through community-submitted reports. It provides a centralized map where users can access location-based incident information and view reports that have passed administrator moderation.",

    problem:
      "Information about mass demonstrations is often scattered across multiple social media platforms and other sources. This makes it difficult for the public to obtain structured, location-specific, and sufficiently verified information. Unclear incident locations and report accuracy can also make it challenging for people to make informed decisions about their routes.",

    solution:
      "PetaAksi provides an interactive map that displays community-submitted incident reports. The application implements a multi-level verification mechanism consisting of device location validation, spatial report verification, and administrator moderation. The Geolocation API is used to obtain the reporting device's coordinates, while the Haversine algorithm calculates the distance between reports to identify spatially related submissions. Reports from different devices within the defined proximity and time window can provide additional supporting information. Administrators review reports before they become publicly visible.",

    contribution:
      "Designed and developed the web application, including the public-facing interface and administrator dashboard. Implemented the interactive map using React and Leaflet, integrated device location validation through the Geolocation API, and developed the spatial report matching mechanism using the Haversine algorithm. Also contributed to the report submission workflow, administrator moderation features, and system testing.",

    technologies: [
      "React",
      "JavaScript",
      "Leaflet",
      "Progressive Web App",
      "Geolocation API",
      "Haversine Algorithm",
    ],

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
    subtitle: "Air Quality Monitoring and Prediction Web Application",

    description:
      "SkyWatch is a web-based application developed to present air quality information and air pollution predictions. It combines location-based visualization with data presentation to help users understand air quality conditions through an accessible interface.",

    problem:
      "Air quality information and pollution data can be difficult to interpret without clear visual presentation and location-based context. Users need an accessible way to explore air quality information and understand predicted pollution levels in different areas.",

    solution:
      "SkyWatch provides a web interface for exploring air quality information through interactive map visualization and data displays. The application integrates a frontend interface with a backend prediction service developed by the team, allowing prediction results to be presented in a more accessible format.",

    contribution:
      "Contributed as a Front-End Developer in a collaborative team of six members. Focused on developing the Predict page interface, including its layout and visual components for presenting location-based prediction information. Worked with the team's backend services to support the presentation of prediction data in the frontend.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Bootstrap",
      "Leaflet",
      "FastAPI",
    ],

    visualClass: "project-visual-green",

    demoUrl: "https://skyywatchh.netlify.app/",
    githubUrl: "https://github.com/RezaHarahap18/Sky-Watch",
  },
];
