import React from "react";

const DesktopFeature = () => {
  const bgImg = "https://i.ibb.co/gZwzWQH/tv.webp ";
  return (
    <div className="min-h-screen lg:flex w-11/12 mx-auto py-12">
      <div className="left w-1/2">
        <div className="flex items-center justify-center">
          <img src="https://i.ibb.co/y6B7Pqt/badge.webp" alt="badge" />
          <h3 className="text-white text-4xl font-bold">
            Here is How We’re Ranking{" "}
            <span className="text-secondary">On Google</span>
          </h3>
        </div>
        <div>
          <img src="https://i.ibb.co/khB0Yk9/badge-arrow.webp" alt="arrow" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `${bgImg}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex:111
          
        }}
        className="right w-1/2"
      >
        <div>
            <table>
                <thead>
                    <tr>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h2>Shafique</h2></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default DesktopFeature;
