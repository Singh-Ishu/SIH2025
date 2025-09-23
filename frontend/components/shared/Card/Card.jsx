import { forwardRef } from "react";
import styles from "./Card.module.css";

const Card = forwardRef(({ 
    children, 
    className = "", 
    variant = "glass", 
    hover = true,
    onClick,
    ...props 
}, ref) => {
    const cardClasses = [
        styles.card,
        styles[variant],
        hover && styles.hover,
        className
    ].filter(Boolean).join(" ");

    return (
        <div 
            ref={ref}
            className={cardClasses}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = "Card";

export default Card;