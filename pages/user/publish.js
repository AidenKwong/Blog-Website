import Image from "next/image";
import Link from "next/link";
import FileBase from "react-file-base64";

import styles from "../../styles/user.publish.module.css";
import websitelogo from "../../public/images/speech-bubble.png";

import { useState, useRef } from "react";

import Modal from "../../components/Modal";

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

  const handleChange = (index) => {
    setSelectedCategoryState(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
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
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      Publisher: e.target.value,
                    });
                  }}
                  required
                  placeholder="Publisher"
                  value={formData.Publisher}
                  className={styles.postInputBox}
                ></input>
              </div>
              <div className={styles.postFormItem}>
                Category
                <select
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      Category: e.target.value,
                    });
                  }}
                  required
                  value={formData.Category}
                  className={styles.postInputBox}
                  ref={selectedCategory}
                  onChange={() =>
                    handleChange(selectedCategory.current.options.selectedIndex)
                  }
                >
                  {categories.map((category) => {
                    return (
                      <option className={styles.option} key={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
                <span className={styles.subcategory}> Subcategory</span>
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
                <span className={styles.selectFile}>
                  <FileBase
                    required
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, Thumbnail: base64 })
                    }
                  />
                </span>
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
                <button type="submit" className={styles.publishButton}>
                  Publish
                </button>
              </div>
            </form>
            <Modal
              open={isOpen}
              formData={formData}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
