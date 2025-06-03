import { createContext, useEffect, useState } from "react";
import main from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState(() => {
        const storedPrompts = localStorage.getItem("prevPrompts");
        return storedPrompts ? JSON.parse(storedPrompts) : [];
    });

    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    useEffect(() => {
        localStorage.setItem("prevPrompts", JSON.stringify(prevPrompts));
    }, [prevPrompts]);

    const delayTyping = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord);
        }, 75 * index )
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response = '';

        console.log("Response: " + response);

        try {
            const usedPrompt = prompt ?? input;

            if(!usedPrompt.trim()) {
                setLoading(false);
                return;
            }

            setRecentPrompt(usedPrompt);
            setPrevPrompts((prev) => [...prev, usedPrompt]);

            response = await main(usedPrompt);
            
            if(!response || typeof response !== "string") {
                setResultData("No valid response received.");
                setLoading(false);
                return;
            }

            // format response
            let responseArray = response.split("**");
            let newResponse = "";

            responseArray.forEach((segment, index) => {
                if(index % 2 === 1) {
                    newResponse += `<strong>${segment}</strong>`;
                } else {
                    newResponse += segment;
                }
            });

            let newResponse2 = newResponse.split("*").join('<br/>');
            let newResponseArray = newResponse2.split(" ");

            newResponseArray.forEach((word, i) => {
                delayTyping(i, word + " ")
            }); 
        } catch(error) {
            console.error('Error during prompt send:', error);
            setResultData('An error occurred while processing your request.');
        }

        setLoading(false);
        setInput("");
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;