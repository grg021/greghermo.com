import {IconProps} from "../../lib/types";

const IcoDot = ({className,fill}: IconProps) => {
    return (
        <svg
            className={className + ' fill-current mr-2'}
            style={{color: fill}}
          aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
        </svg>
    )
}

export default IcoDot;
