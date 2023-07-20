import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Button from '@mui/material/Button';

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936", "#FF0000"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div id="editor" className="p-8 flex flex-col items-center pt-0 gap-8">
      <h1 className="font-medium text-4xl">Resume Builder</h1>
      <div className="w-full md:flex grid justify-center items-center gap-10">
        <div className="flex flex-col justify-center">
          <h3 className="md:text-2xl text-lg font-bold font-mono">Set your HighLighting Colours</h3>
          <div className="md:flex md:gap-5 grid grid-cols-2 md:p-5 space-y-3 justify-center items-center">
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`h-8 w-8 bg-blue-500 rounded-full ${
                activeColor === item ? "border-2 border-black" : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        </div>
        <Button variant="contained">
        <ReactToPrint
          trigger={() => {
            return (
              <button>
               {/* Download <ArrowDown /> */}
               Print Resume
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        </Button>
      </div>
      <div className="flex flex-col w-full gap-8">
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
