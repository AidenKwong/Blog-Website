import Image from "next/image";
import Link from "next/link";

import styles from "./publish.module.css";
import websitelogo from "../../../public/images/speech-bubble.png";

import { useState, useRef, useEffect } from "react";

import Modal from "../../../components/Modal";

const categories = ["News", "Tech", "Life Styles", "Hobbies"];
const newsCategories = [
  "Current affairs",
  "World",
  "Politics",
  "Finance",
  "Entertainment",
];
const techCategories = ["Mobiles", "Hardware", "Software", "Apps", "Others"];
const lifeStylesCategories = [
  "Creative",
  "Health",
  "Food",
  "Relationships",
  "Travel",
  "Career",
  "Event",
  "School",
];
const hobbiesCategories = [
  "Sport",
  "Game",
  "TV",
  "Anime",
  "Photography",
  "Music",
  "Car",
  "Pet",
  "Fashion",
  "Live Streaming",
  "18+",
];

const initialForm = {
  Publisher: "",
  Category: "News",
  Subcategory: "Current affairs",
  Thumbnail: "",
  Title: "",
  Content: "",
  tags: "",
};

export default function Publish() {
  const [selectedCategoryState, setSelectedCategoryState] = useState(0);
  const [formData, setFormData] = useState(initialForm);
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory = useRef(null);
  const [auth, setAuth] = useState();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("profile"));
    if (auth) {
      setAuth(auth);
      setFormData({ ...formData, Publisher: auth?.result?.username });
    }
  }, []);

  const handleChange = (index) => {
    setSelectedCategoryState(index);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    if (e.clipboardData.files.length > 0) {
      getBase64(e.clipboardData.files[0]);
    }
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    getBase64(e.dataTransfer.files[0]);
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    getBase64(e.target.files[0]);
  };
  const getBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      setFormData({
        ...formData,
        Thumbnail: reader.result,
      });

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logobox}>
          <Link href="/">
            <div>
              <Image
                src={websitelogo}
                width={40}
                height={40}
                quality={100}
                className={styles.logo}
              />
            </div>
          </Link>
          <div className={styles.postStation}>Post Station</div>
        </div>
      </div>
      <div className={styles.lowerDiv}>
        <div className={styles.navbar}>This is navbar</div>
        <div className={styles.mainDiv}>
          <div className={styles.instruction}>
            {`Publish your thoughts to the world.
            
            Your precious opinion may help the world to go one step further. 
            
            Discussion can help us learn more.`}
          </div>

          <div className={styles.postForm}>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className={styles.postFormItem}>
                Publisher
                {auth ? (
                  <span> {auth?.result?.username}</span>
                ) : (
                  <span> Not yet signed in</span>
                )}
              </div>

              <div className={styles.postFormItem}>
                Category
                <select
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      Category: e.target.value,
                    });
                    handleChange(
                      selectedCategory.current.options.selectedIndex
                    );
                  }}
                  required
                  value={formData.Category}
                  className={styles.postInputBox}
                  ref={selectedCategory}
                >
                  {categories.map((category) => {
                    return (
                      <option className={styles.option} key={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
                <div className={styles.subcategory}> Subcategory</div>
                {selectedCategoryState == 0 && (
                  <select
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        Subcategory: e.target.value,
                      });
                    }}
                    required
                    value={formData.Subcategory}
                    className={styles.postInputBox}
                  >
                    {newsCategories.map((category) => {
                      return <option key={category}>{category}</option>;
                    })}
                  </select>
                )}
                {selectedCategoryState == 1 && (
                  <select
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        Subcategory: e.target.value,
                      });
                    }}
                    required
                    value={formData.Subcategory}
                    className={styles.postInputBox}
                  >
                    {techCategories.map((category) => {
                      return <option key={category}>{category}</option>;
                    })}
                  </select>
                )}
                {selectedCategoryState == 2 && (
                  <select
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        Subcategory: e.target.value,
                      });
                    }}
                    required
                    value={formData.Subcategory}
                    className={styles.postInputBox}
                  >
                    {lifeStylesCategories.map((category) => {
                      return <option key={category}>{category}</option>;
                    })}
                  </select>
                )}
                {selectedCategoryState == 3 && (
                  <select
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        Subcategory: e.target.value,
                      });
                    }}
                    required
                    value={formData.Subcategory}
                    className={styles.postInputBox}
                  >
                    {hobbiesCategories.map((category) => {
                      return <option key={category}>{category}</option>;
                    })}
                  </select>
                )}
              </div>
              <div className={styles.postFormItem}>
                Thumbnail
                <input
                  maxLength="0"
                  className={styles.selectFile}
                  placeholder="Drag and drop or paste here"
                  onPaste={handleOnPaste}
                  onDrop={handleOnDrop}
                ></input>
                <input type="file" onChange={handleUploadImage}></input>
              </div>
              <img src={formData.Thumbnail} width="150px"></img>
              <div className={styles.title}>
                Title
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      Title: e.target.value,
                    });
                  }}
                  required
                  value={formData.Title}
                  placeholder="Title"
                  className={styles.titleInput}
                ></input>
              </div>

              <div className={styles.postFormItem}>Content</div>
              <textarea
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    Content: e.target.value,
                  });
                }}
                required
                value={formData.Content}
                placeholder="Content"
                className={styles.contentInput}
              ></textarea>
              <div className={styles.postFormItem}>
                tags
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      tags: e.target.value,
                    });
                  }}
                  required
                  value={formData.tags}
                  placeholder="tags"
                  className={styles.postInputBox}
                ></input>
              </div>
              <div className={styles.publish}>
                <button
                  type="submit"
                  className={styles.publishButton}
                  disabled={!auth}
                >
                  Publish
                </button>
              </div>
            </form>
            <Modal
              open={isOpen}
              onClose={() => setIsOpen(false)}
              formData={formData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
