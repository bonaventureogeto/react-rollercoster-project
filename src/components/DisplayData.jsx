import { Link } from "react-router-dom";

// Component to display Data called DisplayData
const DisplayData = () => {
  const data = [
    {
      id: 0,
      language: "JavaScript",
      description: "Software Engineering",
    },
    {
      id: 1,
      language: "Python",
      description: "Data Science",
    },
    {
      id: 2,
      language: "Kotlin",
      description: "Android Development",
    },
  ];

  return (
    <>
      <Link to="/">Home</Link>
      {/* Map function to loop over our data */}
      {data.map((item) => {
        return (
        // Using the id as the key
        <div key={item.id}>
          {/* Accessing the language property */}
          
          <div>{item.language}</div>
          {/* Accessing the description property */}
          <div>{item.description}</div>
        </div>
      )})}
    </>
  );
};

export default DisplayData;
