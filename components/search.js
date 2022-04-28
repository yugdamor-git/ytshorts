import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Default } from "react-awesome-spinners";
import Spinner from "./spinner";

async function fetchData(url, youtubeApi) {
  const response = await fetch(`${youtubeApi}/api/v1/info?url=${url}`);

  const data = await response.json();

  return data;
}

async function fetchThumbnailData(url, youtubeApi) {
  const formData = new URLSearchParams();

  formData.append("url", url);

  const response = await fetch(`${youtubeApi}/api/v1/thumbnails?url=${url}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data;
}

const Search = ({ downloadType, t, setData }) => {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  function scrollDown(downloadType) {
    let elem = null;
    if (downloadType == "thumbnail") {
      elem = document.getElementById("thumbnailDownload");
    } else {
      elem = document.getElementById("downloadSection");
    }
    if (elem != null) {
      if (downloadType == "thumbnail") {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      } else {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }

  async function handleInput(text) {
    setIsLoading(true);

    setSearchInput(text);
    if (validateUrl(text) == true) {
      if (downloadType == "thumbnail") {
        let data = await fetchThumbnailData(text, "http://api.savetube.me");
        setData(data);
        scrollDown(downloadType);
      } else {
        let data = await fetchData(text, "http://api.savetube.me");
        setData(data);
        scrollDown(downloadType);
      }
    }

    setIsLoading(false);
  }

  function validateUrl(url) {
    if (url == null) {
      return false;
    }

    if (!url.toString().startsWith("https://")) {
      return false;
    }

    if (!url.toString().includes("youtu")) {
      return false;
    }
    return true;
  }

  const [isLoading, setIsLoading] = useState(false);

  //     background: #afafaf;
  // opacity: 0.3;
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // width: 100%;
  // height: 100%;
  // left: 0;
  // right: 0;
  // z-index: 100;

  return (
    <div>
      {isLoading == true &&
        <div className="fixed top-0 bottom-0 w-[100%] h-[100%] left-0 right-0 z-[100] bg-[#afafaf] opacity-30">
          <div className="relative"></div>
        </div>
      }
      <div className="flex flex-col md:flex-row items-center justify-center mx-4">
        <div className="flex flex-col items-center justify-center w-full">
          <input
            type={"search"}
            onInput={(e) => handleInput(e.target.value)}
            value={searchInput}
            className="m-1 p-3 rounded-md outline outline-gray-500 outline-1 w-full md:text-lg"
            placeholder={t("search_text")}
          />
        </div>
        <div className="flex items-center flex-col justify-center">
          <button
            className={`mx-6 flex items-center justify-center w-40 font-bold rounded-md px-4 py-3 ${
              validateUrl(searchInput) == false
                ? "dark:bg-gray-900 dark:text-gray-400 text-white bg-red-500"
                : "text-white bg-red-500"
            }`}
          >
            <span className="text-lg">{t("get_video")}</span>
          </button>
        </div>
        
      </div>
      {isLoading == true &&
            <div className="flex justify-center items-center">
              <div>
                <Default sizeUnit="px" color="#FD0054" />
              </div>
            </div>
          }
    </div>
  );
};

export default Search;
