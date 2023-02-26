import React, { useEffect, useState } from "react";

const EmojiPicker = ({ Receiver }) => {
  const [emoji, setEmoji] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://emoji-api.com/emojis?access_key=1189878b5c72f8e7e05ef2184680cf80fcc429f7"
        );
        const data = await response.json();
        setEmoji(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {emoji
        .slice(0, 100)
        .filter((emoji) => {
          return Receiver.toLowerCase() === ""
            ? ""
            : emoji.unicodeName.toLowerCase().includes(Receiver.toLowerCase());
        })
        .map((emoji) => (
          <div key={emoji.unicodeName}>
            {emoji.character}:{emoji.unicodeName}
          </div>
        ))}
    </div>
  );
};

export default EmojiPicker;
