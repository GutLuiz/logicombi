import React, { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import style from "./homepage.module.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import ChartContainer from "../../components/ChartContainer/ChartContainer";

import logo from "../../assets/logos/logoPreto.png"
import axios from "axios";

type ClienteCidade = {
  name: string;
  uv: number;
};

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 200 },
  { name: 'Apr', uv: 278 },
  { name: 'May', uv: 189 },

];

function App() {
  const [clientesData, setClientesData] = useState<ClienteCidade[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const counts: Record<string, number> = {};
        (response.data as any[]).forEach((user: any) => {
          const city = user.address.city;
          counts[city] = (counts[city] || 0) + 1;
        });
        const data: ClienteCidade[] = Object.entries(counts).map(([name, uv]) => ({ name, uv: uv as number }));
        setClientesData(data);
      });
  }, []);

  return (
    <div>
      <section>
        <Header />
      </section>
      <section className={style.ContainerTitulos}>
        <h1 className={style.TituloGeral}>Visão Geral</h1>
        <img src={logo} alt="" className={style.Logo} />
      </section>
      <ChartContainer title="Clientes Cadastrados:">
        <ResponsiveContainer>
          <BarChart data={clientesData}>
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
    </div >
  );
}

export default App;
