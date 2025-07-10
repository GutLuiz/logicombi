import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import style from "./homepage.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import ChartContainer from "../../components/ChartContainer/ChartContainer";

import logo from "../../assets/logos/logoPreto.png";

const data = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 200 },
  { name: "Apr", uv: 278 },
  { name: "May", uv: 189 },
];

function App() {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.principal}>
        <div className={style.ContainerTitulos}>
          <h1 className={style.TituloGeral}>Visão Geral</h1>
          <img src={logo} alt="" className={style.Logo} />
        </div>
        <section className={style.teste}>
          <ChartContainer title="Clientes Cadastrados:">
            <ResponsiveContainer>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#cc5200ec" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer title="Pedidos Feitos:">
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#cc5200ec" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </section>
        {/*
        <section>
          <ChartContainer title="Pedidos Feitos:">
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#cc5200ec" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </section>
        <section>
          <ChartContainer title="Vendas Feitas:">
            <ResponsiveContainer>
              <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Tooltip />
                <Radar name="Vendas" dataKey="uv" stroke="#cc5200ec" fill="#cc5200ec" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </section> */}
      </main>
    </div>
  );
}

export default App;
