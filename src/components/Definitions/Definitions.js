import "./Definitions.css";
const Definitions = ({ word, meanings, category, lightMode }) => {
 return (
  <div className="meanings">
   {meanings[0] && word && category === "en" && (
    <audio
     src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
     style={{ backgroundColor: "#fff", borderRadius: "10px", width: "100%" }}
     controls
    >
     Your Broswer doesn't support audio
    </audio>
   )}

   {word === "" ? (
    <span className="subTitle">Start by typing word</span>
   ) : (
    meanings.map((mean, index) =>
     mean.meanings.map((item) =>
      item.definitions.map((def, i) => (
       <div
        className="singleMean"
        style={{
         backgroundColor: lightMode ? "#3b5360" : "white",
         color: lightMode ? "white" : "black",
        }}
       >
        <b>
         <i>[{item.partOfSpeech}]</i> /{meanings[index].phonetic}/{" "}
         {def.definition}
        </b>
        <hr style={{ backgroundColor: "black", width: "100%" }} />
        {def.example && (
         <span>
          <b>Example: </b> {def.example}
         </span>
        )}
       </div>
      ))
     )
    )
   )}
  </div>
 );
};

export default Definitions;
