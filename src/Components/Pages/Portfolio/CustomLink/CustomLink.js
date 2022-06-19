import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../../Portfolio/Portfolio.css'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
          style={{ color:match ?'white':'black',backgroundColor:match ?'#1CBC71':'white', textDecoration: match ? "none" : "none",padding:"5px 10px",borderRadius:'8px',fontSize:'14px',border:"1px solid black",}}
          to={to}
          {...props}
        >
          {children}
        </Link>
        </div>
    );
};

export default CustomLink;