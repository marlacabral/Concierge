import React, { useState } from "react";
import './App.css';

export default function App() {
    


const [passeios] = useState([
      {
        id: 1,
        nome: "Passeio de bike (Grupo)",
        imagemUrl:"https://www.bikemagazine.com.br/wp-content/uploads/2014/01/1cerapio3.jpg",
        descricao: "Visita com agendamento: Segunda a Sexta das 9h às 12h ou das 14h às 16h. Sábado das 9h às 12h. Roteiro: A reserva fica a 6km da praia de Caraíva, sendo necessário contratar transporte a parte (Buggy ou Barco), R$ 80,00 por pessoa.",
      },
      {
        id: 2,
        nome: "Passeio de bike (Personal)",
          imagemUrl:"https://hostelexplorer.com.br/wp-content/uploads/2018/04/bike-praia_do_rosa-albergue_explorer.jpg",
          descricao: "Visita com agendamento: Segunda a Sexta das 9h às 12h ou das 14h às 16h. Sábado das 9h às 12h. Roteiro: A reserva fica a 6km da praia de Caraíva, sendo necessário contratar transporte a parte (Buggy ou Barco), R$ 80,00 por pessoa.",
      },
      {
        id: 3,
          nome: "Aluguel de bike",
          imagemUrl: "https://static.vecteezy.com/ti/fotos-gratis/p1/2445830-bike-locked-on-the-seashore-foto.JPG",
           descricao: "Montain bike - aro 29 R$150,00 por dia. Fat bike para andar na areia R$150,00 por dia. Taxa de entrega e retirada na pousada R$ 50,00",
        },
        {
          id: 4,
          nome: "Passeio de Buggy em Caraíva",
          imagemUrl: "https://www.idasevindasblog.com/wp-content/uploads/2017/01/DSC_0429.jpg" ,
          descricao:"Roteiro: Sai de Caraíva e vai até o Rio Corumbau.Tempo de passeio: 30min. Ao chegar à margem do rio, um barco para fazer a travessia estará lhe aguardando. Valor R$5,00 por trecho.Após uma caminhada de 15min você chegará até as  barracas da praia do Corumbau."
      },
      {
        id: 5,
        nome: "Cavalgada Ecológica",
        imagemUrl:
          "https://www.buziosonline.com.br/fotosfb/108540475-G.jpg",
          descricao: "Passeio pelas praias de Trancoso. Duração: 2 horas. Valor: R$300,00 por pessoa. Local de saída: Quadrado. Passeio por florestas e falésias com vista para o Vale dos Búfalos e lanche no final. Duração: 2 horas. Valor: R$250,00 por pessoa. Local de saída: a combinar, podendo buscar na pousada"
      },
      {
        id: 6,
        nome: "Golf nas Falésias",
        imagemUrl:
          "https://www.bahiahomes.com.br/content/uploads/2014/12/BH_Destinos_Terravista-027.jpg",
          descricao:"Um dos campos de golfe mais bonitos do mundo! A estrela do campo é um buraco entre falésias que atrai, na ensolarada Trancoso-BA, golfistas de todo o mundo em busca de desafio e beleza.Desenhado e construído por Dan Blankenship, da Golf Tee Golf International, o buraco 14 de Par 3 do Terravista Golf é considerado um cartão postal do golfe brasileiro por sua beleza e qualidade arquitetônica. Venha desafiar-se nessa incrível tacada!"
      },
      {
        id: 7,
        nome: "Quadriciclo",
        imagemUrl:
          "https://www.advalturismo.com.br/wp-content/uploads/2018/02/14441945.jpg",
          descricao: "Passeio de 2h: Praia de Itaquena e Ipatimirim R$ 220,00 por máquina; Passeio de 3h: Praia de Itaquena, Ipatimirim e Barra do Rio dos frades R$ 300,00 por máquina; Passeio de 4h: Praia de Itaquena, Ipatimirim, Barra do Rio dos Frades, Praia do Taípe, R$ 400,00, por máquina; Passeio Caraíva: saída às 09h00 retorno às 15h00, R$500,00, por máquina, distância 40km. Passeio Praia do Espelho: saída as 9h00 retorno às 16h00, R$ 400,00 por máquina, distância 25km."
      },
      {
        id: 8,
        nome: "UTV",
        imagemUrl:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/4e/5b.jpg",
          descricao: "Passeio de 2h: Praia de Itaquena e Ipatimirim, R$ 450,00 por máquina; Passeio de 3h: Praia de Itaquena, Ipatimirim e Barra do Rio dos Frades, R$ 550,00 por máquina; Passeio de 3h30: Praia de Itaquena, Ipatimirim, Barra do Rio dos Frades e Praia do Rio da Barra, R$ 600,00; Passeio de 4h: Praia de Itaquena, Ipatimirim, Barra do Rio dos Frades e Praia do Taípe, R$ 650,00."
      },
      {
        id: 9,
        nome: "Visita Aldeia Indígena",
        imagemUrl: "https://portosegurotur.com/wp-content/uploads/2019/12/porto_boi1-1.jpg",
        descricao: "Visita com agendamento: Segunda a Sexta das 9h às 12h ou das 14h às 16h. Sábado das 9h às 12h. Roteiro: A reserva fica a 6km da praia de Caraíva, sendo necessário contratar transporte a parte (Buggy ou Barco), R$ 80,00 por pessoa.",
      },
      
      {
        id: 10,
        nome: "Yoga",
        imagemUrl:
          "https://degracaeuvou.files.wordpress.com/2016/06/aulc3a3o-de-yoga-na-lagoa-rodrigo-de-freitas.jpg",
          descricao: "Aulas particulares ou em grupo de até 5 pessoas.Estilo: Vinyasa Flow - para todos os níveis. Valor: R$ 120,00 por pessoa"
      },
      {
        id: 11,
        nome: "Caça Submarina Apinéia",
        imagemUrl:
          "https://www.evidive.com.br/wp-content/uploads/2018/05/197566-pesca-submarina-como-funciona-e-onde-pode-ser-feita.jpg",
          descricao:"R$3.500,00. Capacidade até 6 pessoas"
      },
      {
        id: 12,
        nome: "Caiaque no Rio Trancoso",
        imagemUrl:
          "https://www.carpemundi.com.br/wp-content/uploads/2020/03/caiaque-trancoso.jpg",
          descricao: "Roteiro: O guia busca o hóspede no hotel e leva até o acesso do Rio Trancoso. De lá é feita uma remada descida de aproximadamente 1:30h, pela mata atlântica e manguezais, até a Praia dos Nativos. Estão inclusos no passeio: Tranfer, um guia no rio, hidratação, frutas, caiaques e equipamentos. Valor: Até duas pessoas R$ 500,00. Acima de 3 pessoas R$200,00 (por pessoa)"
      },
      {
        id: 13,
        nome: "Passeio de Lancha",
        imagemUrl:
          "https://www.coconutexperience.com.br/wp-content/uploads/2017/05/lancha.jpg",
      },
      {
        id: 14,
        nome: "Kite Surf",
        imagemUrl:
          "https://static.wixstatic.com/media/915c74_c2c3af15542f4996af72f307d91ddc73~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      },

      {
        id: 15,
        nome: "Pesca de corrico em alto mar",
        imagemUrl:
          "https://www.boatshopping.com.br/wp-content/uploads/2015/09/teta02.jpg",
          descricao: "R$ 5.000,00. Capacidade até 4 pessoas"
      },
      {
        id: 16,
        nome: "Pesca de molinete",
        imagemUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EYPvUVuTgMQ867aHHBOHORN1Kk6YnaaRXA&usqp=CAU",
          descricao: "R$ 4.000,00. Capacidade até 4 pessoas"

      },
      {
        id: 17,
        nome: "Aula de Surf",
        imagemUrl:
          "https://goldenfishbuzios.com.br/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-20-at-11.05.13-10.jpeg",
          descricao: "Local: Praia dos Nativos (praia atrás da igreja do Quadrado). Valor: R$ 200,00 por pessoa. Tempo de Duração: 1h"
      },
      {
        id: 18,
        nome: "Stand up Padle",
        imagemUrl:
          "https://www.plazahoteis.com.br/wp-content/uploads/2018/10/stand-up-paddle-bahia-out18.jpg",
          descricao: "Local: Praia dos Nativos (praia atrás da igreja do Quadrado). Aluguel R$ 100,00/1h. Aluguel R$ 250,00/dia. Passeio R$ 150,00/1h."
      },
      {
        id: 19,
        nome: "Wakebord",
        imagemUrl:
          "https://media-cdn.tripadvisor.com/media/photo-s/08/26/53/fd/getlstd-property-photo.jpg",
          descricao: "Local: Praia dos Nativos (praia atrás da igreja do Quadrado). Valor: R$ 700,00/30min ou R$ 1.200,00/1h"
      },
      {
        id: 20,
        nome: "Helicóptero",
        imagemUrl:
          "https://www.aeroanuncios.com.br/images/2016/07/13/1590/2008-helicoptero-robinson-r44-raven-ii-car_2.jpg",
          descricao: "O helicóptero Robinson R44, traz o melhor custo-benefício do mercado e é uma aeronave altamente confiável."
      },
    ]);

    
    function botao(){
      alert("Passeio agendado, divirta-se! :)")};
    

    const adicionaPasseio = (e) => {
      e.preventDefault();
      
    }

    return (
      
      <>
        <h1>Quais dessas experiências você quer Viver?</h1>

        <div className="container">
          
          
            {passeios.map((f) => (
                <li key={f.id}>
                <img src={f.imagemUrl} alt={f.nome} />
                <h3>{f.nome}</h3>   
                <h5>{f.descricao}</h5>
                <p></p>
                <button value="btn" type="button" onClick={botao}>Agendar</button>
               </li> 
              
            ))}
          
        </div>

      </>
    );



}