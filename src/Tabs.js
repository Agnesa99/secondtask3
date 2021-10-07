import {useState } from "react";
import "./App.css";
import Productmegamenu from "./Productmegamenu";


function Tabs() {
    const [toggleState, setToggleState]=useState(1);

    const toggleTab= (index) => {
        setToggleState(index);
       

    };
     
    return (

        

        <div className="container">
            <div className="bloc-tabs">
                <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >
                    Domain
                </button>
                <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                >
                    Web Hosting
                </button>
                <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
                >
                  Dedicated Server
                </button>
                <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
                >
                    Virtual Cloud Servers
                </button>
                <button
                className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
                >
                    WordPress Hosting
                </button>
                <button
                className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(6)}
                >
                  Email Hosting
                </button>
               
                <button
                className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(7)}
                >
                   VPS Hosting Servers
                </button>
                <button
                className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(8)}
                >
                    Free Hosting
                </button>

                
                </div>
          
                <div className="content-tabs">
                     <div
                      className={toggleState === 1 ? "content active-content" : "content"}
                      > 
                          <hr />
                          
                              <Productmegamenu/>

                              </div>
                              
                              <div 
                                className={toggleState === 2 ? "content active-content" : "content"}
                                >   
                                 <hr />
                                 <Productmegamenu/>

                                 
                              </div>
                              <div
                              className={toggleState === 3 ? "content active-content" : "content"}
                                >

                                 <hr />
                               
                              <Productmegamenu/>
                              </div>
                              <div className="content-tabs">
                     <div
                      className={toggleState === 4 ? "content active-content" : "content"}
                      >
                          
                          <hr />  
                              <Productmegamenu/>
                              </div>
                              
                              <div 
                                className={toggleState === 5 ? "content active-content" : "content"}
                                >

                                 <hr />
                            
                              <Productmegamenu/>
                              </div>
                              <div
                              className={toggleState === 6 ? "content active-content" : "content"}
                                >

                                 <hr />
                              
                              <Productmegamenu/>
                              </div>
                              <div
                              className={toggleState === 7 ? "content active-content" : "content"}
                                >

                                 <hr />
                              <Productmegamenu/>
                              </div>
                              <div
                              className={toggleState === 8 ? "content active-content" : "content"}
                                >     
                                 <hr />
                                
                              <Productmegamenu/>
                              </div>
                            </div>
                            </div>
                            </div>
                        
                              
                              
                              
                     ); 
                                 
                 }
                        export default Tabs;    
                              
                        