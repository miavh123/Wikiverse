import React from 'react';


export const Page = (props) => {
 
  const [dataToDisplay, setDataToDisplay] = useState(undefined);

  const handleClick = async () => {
    console.log("Clicked!!")
    // just get data for a SINGLE article
    const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
    const data = await response.json();
    console.log(data);
    // update the state
    setDataToDisplay(data);
  }
  return <>
  <h3 className="headline" 
    onClick={ handleClick }>{props.page.title}</h3>
    <div className="dataDump">
      {
        // render data
        dataToDisplay ? dataToDisplay.author.name : ""
      }
    </div>
</>
} 
	