import React from "react";
import style from "./chartContainer.module.css";

interface ChartContainerProps {
    title: string;
    children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => (
    <section className={style.ContainerConteudo}>
        <h1 className={style.TituloGrafico}>{title}</h1>
        <div style={{ width: "100%", height: 300, padding: "30px" }}>
            {children}
        </div>
    </section>
);

export default ChartContainer; 