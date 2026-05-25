export const handleProjectAction = (item: any) => {
  if (item.link && item.link !== "#" && item.link !== "") {
    return {
      status: "live",
      title: "Project is Live",
      description: "This project has been deployed and is publicly accessible.",
      buttonLabel: "Visit Website",
      buttonLink: item.link,
    };
  }

  if (item.status === "maintenance") {
    return {
      status: "maintenance",
      title: "Under Maintenance",
      description: "This project is currently being improved and temporarily unavailable.",
    };
  }

  return {
    status: "private",
    title: "Private System / NDA",
    description: "This project is confidential and cannot be publicly accessed.",
  };
};
