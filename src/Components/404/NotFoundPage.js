import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {

        // style for the nav link

    const style = {
        "color": "white",
        "backgroundColor": "#34ADF6",
        "padding": "10px 20px",
        "textAlign": "center",
        "textDecoration": "none",
        "display": "inline-block",
        "fontSize":" 16px",
        "margin": "4px 2px",
        "cursor": "pointer",
        "border": "none",
        "border-radius": "4px"
    }
    return (
        <div>
            <div className="container py-5 text-center">
	        <div className="body-style">
            <div className="img404Container">
            <img src="https://lh3.googleusercontent.com/KnAhFB7f8i88GvV9jZbGPMDEKSm8a_Ewz1YGsa7FVhM5ocHarcVq7nAZgpufUmzWmViqU76CbWvP13sh-oLWcjCCfCbvUAO7LOYfoYmtgvC9zST-myYY9AfqePPTMNR_8LVL67T1eT_S923Oi5YrkrtMGkPipUXxqDtdc0Jf9TaC7AI0sQjwaqCKh0YMaQ1Yo9_VgEiwSHB60N1qxfAYXj9g3RrMedThuDOLEh9lJgmvI_VzxRSh7ZEh6hoIeRsHSI55CUE8Buyv1G399y2e_B97LSgJh7d-GU4RJqlrfuRuAWL2x0p_PG52Z83niCdOV41o-z8Kai6z5Il1z8cXnGUvlaFj0P_cfxdvyRIGSpYjTI6LSU2UtCxD-kNgBah7CJVSCpR6AgMHHyQQ5gQYtodvn4C_9GrYKzs1rJn66wNeUfCLJ33aqXWZdW_gILJMXK60rJ_65aCIWHvsAieTqqitZURwH0mXEYqoowrddbKj62pKuB_vOgfkcQWgVuU2jqwEWcg41KZbmfdmAasYTvvRbzSpsG44myVsg-DrVLp7Wrgl2Uii47B-v3aPFYy1_y_2bVthygSryH8xGnPXgsaLFaNWywmZN1hNCavugel_-eyrQn7Elrau1U9ZoZECxL8w7ikuD6fzZf_EWfkFn29ZyLOuRfT8L0bqVrSeInzy6TkNOLV0je8pPyVcgeVJoL0_rQsFZE-Nt_CYutuW1Q4F=w301-h248-no" alt="page not found img" className="img404"/>
            </div>
            <div className="div404">
            <h1 className="header404">Page Not Found</h1>
            <div className="text404">We can't find the page you're looking for.You can either return to the previous page,visit our homepage or contact our support team.</div>
            <div>
            <br/>
            <NavLink to="/home" className="button-style" style={style}>Visit Homepage</NavLink>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default NotFoundPage;