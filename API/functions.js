//Author: tmx37
//Description: this file contains async functions that are used directly by tmx37-API

//handles API logs

//EXPORT
export async function tLog(logMessage = "") {
    //check if log with actual date exists
    //      if yes, append message to it
    //      if not, create new file with actual date, append description message and input message to it 
    
    const actualDate = Date.now;
    if (actualDate){

    }
    
}

//FUNCTIONS
export function readTextFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const contents = event.target.result;
      console.log(contents);
    };
    reader.onerror = function(event) {
      console.error("File could not be read! Code " + event.target.error.code);
    };
    reader.readAsText(file);
  }
  