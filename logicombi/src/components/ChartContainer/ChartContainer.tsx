import React from "react";
import style from "./chartContainer.module.css";

interface ChartContainerProps {
    title: string;
    children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, children }) => (
    <section className={style.containerconteudo}>
        <h1 className={style.titulografico}>{title}</h1>
        <div className={style.grafico}>
            {children}
        </div>
    </section>
);

export default ChartContainer; 