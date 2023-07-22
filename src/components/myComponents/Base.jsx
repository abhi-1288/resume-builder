/* eslint-disable react/prop-types */
import { useState } from "react";
import ReactToPrint from "react-to-print";

import Resume from "../Resume/Resume";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'

const Base = (props) => {
    const { resumeRef, sections, information, activeColor, showResume, setShowResume } = props;


    const [profileImage, setProfileImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleViewResume = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowResume(true);
        }, 5000); // Set the timeout to 5 seconds (5000 milliseconds)
    };

    return (
        <div className="flex flex-col w-full gap-8">

            <div className="flex md:flex-row flex-col space-y-3 space-x-3 justify-center items-center">
                <div className="flex flex-col justify-center">
                    <label>Upload Your Profile</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="py-2 px-4 border-4 border-dashed border-slate-500 rounded-md"
                    />
                </div>

                <div className="flex space-x-5 ">
                    <Button onClick={handleViewResume} variant="contained" sx={{ width: "fit-content", height: "fit-content" }}>
                        <Link href="#resume" color="inherit" >
                            {loading ? <p> Setting up your data...</p> : <p>View Resume</p>}
                        </Link>
                    </Button>

                    <ReactToPrint
                        trigger={() => {
                            return (
                                <Button variant="contained" sx={{ width: "fit-content", height: "fit-content" }}>
                                    Print Resume
                                </Button>
                            );
                        }}
                        content={() => resumeRef.current}
                    />
                </div>
            </div>

            <h1 className="text-center text-lg md:text-xl italic font-mono font-semibold p-2 m:p-0">The actual print and view resume on mobile may differ because of actual width of a mobile display</h1>

            {showResume && (
                <Resume
                    id="resume"
                    profileImage={profileImage}
                    ref={resumeRef}
                    sections={sections}
                    information={information}
                    activeColor={activeColor}
                />)}

        </div>
    );
}

export default Base;