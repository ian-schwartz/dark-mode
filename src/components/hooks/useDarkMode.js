import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('darkMode', false); // using the local storage custom hook

  useEffect(() => { //useEffect to run code upon app startup
    const darkMode = 'dark-mode';  // making the dark-mode classname that will be added in our if statement
    const element = window.document.body; // selecting the body tag of the entire document, which we will add the classname to
    if (enabledState === true) { // if dark mode = true
    // add classname to the body variable
      element.classList.add(darkMode);
    } else { //if not
      //remove the classname
      element.classList.remove(darkMode);
    }
  }, [enabledState]); // dependency array of the true/false values, once it changes the code will re-run in useEffect

  return [enabledState, setEnabledState]; // return enabledState and the setter for it
}