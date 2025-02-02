export const switchCaseModalSize = (size: string) => {
  let minWidth: string;
  let height: string;
  switch (size) {
    case "x-small":
      minWidth = "min-w-[20vw]";
      height = "h-full";
      break;
    case "smaller":
      minWidth = "min-w-[40vw]";
      height = "h-[11rem]";
      break;
    case "smaller-h-full":
      minWidth = "min-w-[40vw]";
      height = "h-full";
      break;
    case "small":
      minWidth = "min-w-[40vw]";
      height = "h-[40vh]";
      break;
    case "small-h-full":
      minWidth = "min-w-[40vw]";
      height = "h-full";
      break;
    case "medium":
      minWidth = "min-w-[60vw]";
      height = "h-[60vh]";
      break;
    case "medium-h-full":
      minWidth = "min-w-[60vw]";
      height = "h-full";

      break;
    case "large":
      minWidth = "min-w-[85vw]";
      height = "h-[80vh]";
      break;
    case "three-cards":
      minWidth = "min-w-[1066px]";
      height = "h-fit";
      break;
    case "large-thin":
      minWidth = "min-w-[65vw]";
      height = "h-[80vh]";
      break;

    case "md-thin":
      minWidth = "min-w-[85vw]";
      height = "h-[70vh]";
      break;

    case "sm-thin":
      minWidth = "min-w-[65vw]";
      height = "h-[70vh]";
      break;

    case "large-h-full":
      minWidth = "min-w-[80vw]";
      height = "h-full";
      break;
    default:
      minWidth = "min-w-[80vw]";
      height = "h-[80vh]";
      break;
  }
  return { minWidth, height };
};
