import styles from "./Grid.module.css";

function Grid({ 
    children, 
    columns = "auto-fit", 
    minWidth = "280px",
    gap = "lg",
    className = ""
}) {
    const gridClasses = [
        styles.grid,
        styles[`gap-${gap}`],
        className
    ].filter(Boolean).join(" ");

    const gridStyle = {
        gridTemplateColumns: columns === "auto-fit" 
            ? `repeat(auto-fit, minmax(${minWidth}, 1fr))`
            : columns
    };

    return (
        <div className={gridClasses} style={gridStyle}>
            {children}
        </div>
    );
}

export default Grid;