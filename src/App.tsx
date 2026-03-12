/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Instagram, 
  MessageCircle, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MapPin, 
  ArrowRight,
  Building2,
  Calendar,
  ChevronDown,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        <ChevronDown 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-slate-100 p-6 text-slate-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

function LeadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cidade: '',
    foco: 'Venda',
    equipe: '1-5'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de um diagnóstico gratuito.%0A%0A*Dados do Formulário:*%0A- *Nome:* ${formData.nome}%0A- *Empresa/Autônomo:* ${formData.empresa}%0A- *Cidade:* ${formData.cidade}%0A- *Foco:* ${formData.foco}%0A- *Equipe:* ${formData.equipe}`;
    window.open(`https://wa.me/5544997068938?text=${message}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white/10 p-6 backdrop-blur-md sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Seu Nome</label>
          <input 
            required
            type="text" 
            placeholder="Ex: João Silva"
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder:text-indigo-300/50 focus:ring-2 focus:ring-white/50"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Imobiliária / Autônomo</label>
          <input 
            required
            type="text" 
            placeholder="Nome da sua empresa"
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder:text-indigo-300/50 focus:ring-2 focus:ring-white/50"
            value={formData.empresa}
            onChange={(e) => setFormData({...formData, empresa: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Cidade e Estado</label>
        <input 
          required
          type="text" 
          placeholder="Onde você atua?"
          className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder:text-indigo-300/50 focus:ring-2 focus:ring-white/50"
          value={formData.cidade}
          onChange={(e) => setFormData({...formData, cidade: e.target.value})}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Foco Principal</label>
          <select 
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-white/50 [&>option]:text-slate-900"
            value={formData.foco}
            onChange={(e) => setFormData({...formData, foco: e.target.value})}
          >
            <option value="Venda">Venda (Prontos)</option>
            <option value="Lancamentos">Lançamentos</option>
            <option value="Locacao">Locação</option>
            <option value="AltoPadrao">Alto Padrão</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-indigo-200">Tamanho da Equipe</label>
          <select 
            className="w-full rounded-xl border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-white/50 [&>option]:text-slate-900"
            value={formData.equipe}
            onChange={(e) => setFormData({...formData, equipe: e.target.value})}
          >
            <option value="1">Apenas eu</option>
            <option value="2-5">2 a 5 pessoas</option>
            <option value="6-15">6 a 15 pessoas</option>
            <option value="16+">Mais de 15 pessoas</option>
          </select>
        </div>
      </div>
      <button 
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 active:scale-95"
      >
        <MessageCircle size={24} />
        Enviar e Falar no WhatsApp
      </button>
      <p className="text-center text-xs text-indigo-200/70">
        Seus dados estão seguros. Ao clicar, você será redirecionado para o WhatsApp.
      </p>
    </form>
  );
}

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <Building2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">LeadImob</span>
          </div>
          <button 
            onClick={scrollToContact}
            className="hidden rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95 sm:block"
          >
            Diagnóstico Gratuito
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.50),white)]" />
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
                  <TrendingUp size={16} />
                  <span>Especialistas em Tráfego Imobiliário</span>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                  Instale um <span className="text-indigo-600">Fluxo Previsível</span> de Compradores no seu WhatsApp.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Pare de queimar dinheiro em portais saturados ou depender da sorte. Nossa metodologia de tráfego pago atrai pessoas que estão buscando imóveis <span className="font-bold text-slate-900">agora</span> e as entrega prontas para o seu corretor fechar negócio.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95"
                  >
                    Quero gerar mais compradores
                    <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
                  >
                    Ver como funciona
                  </button>
                </div>
                <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/64/64`} 
                        alt="Avatar" 
                        className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <p>+150 imobiliárias já aceleraram suas vendas</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-2xl">
                  <img 
                    src="https://lh3.googleusercontent.com/d/18MKg3xri-DHobkBA0I87_yqbP5foOy0E=s1200" 
                    alt="Especialista LeadImob" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Novo Lead Recebido</p>
                        <p className="text-sm font-semibold text-slate-900">Interesse: Apartamento 3 Quartos - Centro</p>
                      </div>
                      <div className="rounded-full bg-green-500 p-2 text-white">
                        <MessageCircle size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-100/50 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-100/50 blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Você está cansado de pagar caro por leads que não atendem o telefone?
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A maioria das imobiliárias está presa na "Escravidão dos Portais", onde você paga caro para dividir o mesmo interessado com 10 concorrentes. O resultado? Leads frios, corretores desmotivados e vendas travadas.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Dependência de Portais</h3>
                <p className="mt-2 text-sm text-slate-600">Pagando caro para competir com centenas de outros corretores no mesmo anúncio.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <TrendingUp size={24} className="rotate-180" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Vendas Inconstantes</h3>
                <p className="mt-2 text-sm text-slate-600">Meses com muitas vendas e meses sem nenhum interessado batendo na porta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solution Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">O Método LeadImob de Atração</h2>
              <p className="mt-4 text-lg text-slate-600">Não fazemos apenas anúncios. Criamos um ecossistema de vendas para sua imobiliária.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Anúncios no Google",
                  desc: "Aparecemos para quem está pesquisando ativamente por 'imóveis à venda' ou 'apartamento na região' agora mesmo.",
                  icon: <Search className="text-indigo-600" size={32} />,
                  step: "01"
                },
                {
                  title: "Instagram e Facebook",
                  desc: "Criamos desejo através de anúncios visuais impactantes que mostram o melhor dos seus imóveis para o público certo.",
                  icon: <Instagram className="text-indigo-600" size={32} />,
                  step: "02"
                },
                {
                  title: "Leads no WhatsApp",
                  desc: "O interessado clica e cai direto no WhatsApp do seu corretor. Sem formulários complexos, apenas conversas reais.",
                  icon: <MessageCircle className="text-indigo-600" size={32} />,
                  step: "03"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100/50 transition-all hover:-translate-y-1">
                  <div className="absolute -top-4 right-8 text-6xl font-black text-slate-50">{item.step}</div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Benefits Section */}
        <section className="bg-indigo-900 px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que escolher nossa geração de leads?</h2>
                <p className="mt-6 text-lg text-indigo-100">
                  Focamos no que realmente importa para o seu negócio: colocar o corretor frente a frente com o comprador.
                </p>
                <ul className="mt-10 space-y-6">
                  {[
                    "Geração constante de interessados todos os dias",
                    "Aumento imediato no número de visitas aos imóveis",
                    "Mais oportunidades reais de fechamento de venda",
                    "Campanhas focadas exclusivamente na sua região de atuação",
                    "Exclusividade: não trabalhamos com seus concorrentes diretos"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 flex-shrink-0 text-emerald-400" size={20} />
                      <span className="text-lg text-indigo-50">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-indigo-800/50 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-4 flex gap-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                    </div>
                    <p className="italic text-indigo-50">"O volume de leads qualificados superou nossas expectativas. Vendemos 3 imóveis no primeiro mês de campanha."</p>
                    <div className="mt-6 flex items-center gap-3">
                      <img 
                        src="https://picsum.photos/seed/ricardo/80/80" 
                        alt="Ricardo" 
                        className="h-10 w-10 rounded-full border border-indigo-400" 
                        referrerPolicy="no-referrer" 
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-bold">Ricardo Silva</p>
                        <p className="text-xs text-indigo-300">Diretor, Silva Imóveis</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-indigo-500 p-6 shadow-lg">
                    <div className="mb-4 flex gap-1 text-amber-200">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                    </div>
                    <p className="italic text-white">"Finalmente um serviço que entende o mercado imobiliário. Leads reais no WhatsApp todo dia."</p>
                    <div className="mt-6 flex items-center gap-3">
                      <img 
                        src="https://picsum.photos/seed/ana/80/80" 
                        alt="Ana" 
                        className="h-10 w-10 rounded-full border border-indigo-300" 
                        referrerPolicy="no-referrer" 
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-bold">Ana Paula</p>
                        <p className="text-xs text-indigo-100">Corretora Autônoma</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-0 sm:pt-8">
                  <div className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-4 flex gap-1 text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                    </div>
                    <p className="italic text-indigo-50">"Aumentamos nossas visitas em 40% logo na primeira semana. O suporte é excelente."</p>
                    <div className="mt-6 flex items-center gap-3">
                      <img 
                        src="https://picsum.photos/seed/marcos/80/80" 
                        alt="Marcos" 
                        className="h-10 w-10 rounded-full border border-indigo-400" 
                        referrerPolicy="no-referrer" 
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-bold">Marcos Oliveira</p>
                        <p className="text-xs text-indigo-300">Gerente de Vendas</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-indigo-700 p-6 shadow-lg">
                    <div className="mb-4 flex gap-1 text-amber-300">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                    </div>
                    <p className="italic text-white">"O melhor investimento que fizemos este ano. O custo por lead é muito menor que nos portais tradicionais."</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 border border-indigo-400 font-bold text-xs">IC</div>
                      <div>
                        <p className="text-sm font-bold">Imobiliária Central</p>
                        <p className="text-xs text-indigo-200">Parceiro desde 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. For Whom Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Para quem é este serviço?</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Imobiliárias Locais",
                  desc: "Que desejam dominar a sua região e não depender apenas de portais.",
                  icon: <Building2 className="text-indigo-600" size={28} />
                },
                {
                  title: "Corretores Autônomos",
                  desc: "Que precisam de um fluxo constante de novos clientes para bater metas.",
                  icon: <Users className="text-indigo-600" size={28} />
                },
                {
                  title: "Lançamentos",
                  desc: "Ideal para esgotar unidades de novos empreendimentos rapidamente.",
                  icon: <MapPin className="text-indigo-600" size={28} />
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Dúvidas Frequentes</h2>
              <p className="mt-4 text-lg text-slate-600">Tudo o que você precisa saber sobre nossa geração de leads.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Quanto tempo leva para ver os primeiros resultados?",
                  a: "Geralmente as campanhas começam a gerar os primeiros leads nas primeiras 24 a 48 horas após a ativação dos anúncios."
                },
                {
                  q: "Preciso ter um site ou landing page?",
                  a: "Não necessariamente. Nós podemos direcionar os leads diretamente para o seu WhatsApp ou criar uma landing page de alta conversão específica para seus imóveis."
                },
                {
                  q: "Qual o investimento mínimo recomendado?",
                  a: "Recomendamos um investimento inicial a partir de R$ 1.000,00/mês em anúncios para garantir um volume saudável de leads qualificados."
                },
                {
                  q: "Os leads são exclusivos da minha imobiliária?",
                  a: "Sim! Diferente dos portais imobiliários, os leads gerados através das nossas campanhas são exclusivos seus e chegam diretamente no seu contato."
                },
                {
                  q: "Como vocês garantem a qualidade dos leads?",
                  a: "Utilizamos filtros avançados de segmentação no Google e Instagram, focando em pessoas com comportamento de compra e interesse real em imóveis na sua região específica."
                }
              ].map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Final CTA Section */}
        <section id="contato" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-indigo-600 shadow-2xl shadow-indigo-200">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Receba um Plano de Guerra para sua região</h2>
                <p className="mt-6 text-lg text-indigo-100">
                  Não é uma "reunião de vendas". É um diagnóstico técnico onde mostraremos exatamente onde estão os compradores da sua cidade e quanto custa atraí-los.
                </p>
                <div className="mt-8 hidden lg:block">
                  <div className="flex items-center gap-4 text-indigo-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Análise de Concorrência</p>
                      <p className="text-sm">Veja quem já está anunciando na sua área.</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4 text-indigo-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-white">Estimativa de Leads</p>
                      <p className="text-sm">Saiba quantos contatos você pode receber por mês.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-8 lg:p-12">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={scrollToContact}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </button>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Building2 size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">LeadImob</span>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} LeadImob - Especialistas em Tráfego Pago para Imobiliárias.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
