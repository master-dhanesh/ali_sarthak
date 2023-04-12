import Gallery from "@/components/Gallery";
import { useState } from "react";

const index = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="container mt-5 p-5 bg-light">
            <button
                onClick={() => setIsShow(!isShow)}
                className="mb-4 btn btn-secondary"
            >
                {isShow ? "Hide" : "Show"}
            </button>
            {isShow && <Gallery />}
        </div>
    );
};

export default index;
