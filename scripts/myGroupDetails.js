import { handleInnerSidebarButtons } from "./sidebar.js";
import { renderCalender } from "./calender.js";
import { currentDate } from "./calender.js";

handleInnerSidebarButtons();
renderCalender(currentDate);

