// import React from "react";
// import projectData from "../../json/projectData.json";

// const ProjectModalSlide = ({ projectId }) => {
//   const selectedProject = projectData.filter((data) => data.id === projectId);
//   const repeatCount = selectedProject[0].imageNumber;
//   console.log(repeatCount);

//   return (
//     <>
//       {Array(repeatCount)
//         .fill()
//         .map((_, index) => (
//           <img
//             src={`${process.env.PUBLIC_URL}/images/project-img/website-img/${selectedProject[0].src}-${index}.png`}
//             alt=""
//           />
//         ))}
//     </>
//   );
// };

// export default ProjectModalSlide;
