import React from "react";
import classes from "./Paginator.module.css";

let Paginator = (props) => {
    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                    return (
                        <span key={p.toString()} className={props.currentPage === p ? classes.selectPage : null}
                              onClick={(e) => {
                                  props.onPageChanged(p);
                              }}>{p}</span>
                    )
                }
            )}
        </div>
    )
}

export default Paginator