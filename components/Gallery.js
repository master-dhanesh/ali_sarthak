import React, { useEffect, useState } from "react";

const Gallery = () => {
    // const [username, setusername] = useState("john");
    // const [password, setpassword] = useState("123456");
    const [images, setImages] = useState([]);
    const [pagecount, setpagecount] = useState(1);
    const GetImages = async () => {
        const strdata = await fetch(
            `https://picsum.photos/v2/list?page=${pagecount}&limit=10`
        );
        const json = await strdata.json();
        setImages(json);
    };

    useEffect(() => {
        GetImages();
    }, [pagecount]);

    // useEffect(() => {
    //     console.log("Show Component Created!");

    //     return () => {
    //         console.log("Show Componentd Destroyed!");
    //     };
    // }, [password]);

    let renderimages = (
        <h1 className="text-center text-danger m-auto">Loading</h1>
    );

    if (images.length > 0) {
        renderimages = images.map((image) => (
            <li key={image.id} className="list-group-item">
                <img width="100" src={image.download_url} alt="" />
                <span className="ms-3">{image.author}</span>
            </li>
        ));
    }

    return (
        <div>
            {/* <small className="text-muted">This is show component</small> <br />
            <button className="mt-3 btn btn-dark" onClick={GetImages}>
                Get Images
            </button>

            <hr className="my-3" />
            <button
                className="mt-3 btn btn-dark"
                onClick={() => setusername("JSON")}
            >
                Change Username
            </button>
            <h1>{username}</h1>
            <hr className="my-3" />
            <button
                className="mt-3 btn btn-dark"
                onClick={() => setpassword("1093746467")}
            >
                Change Password
            </button>
            <h1>{password}</h1> */}

            <ul className="list-group">{renderimages}</ul>
            <hr />
            <div className="text-center">
                <button
                    onClick={() => setpagecount(pagecount - 1)}
                    className="btn btn-dark"
                >
                    {" "}
                    Prev{" "}
                </button>
                &nbsp;
                <button
                    onClick={() => setpagecount(pagecount + 1)}
                    className="btn btn-dark"
                >
                    {" "}
                    Next{" "}
                </button>
            </div>
        </div>
    );
};

export default Gallery;
